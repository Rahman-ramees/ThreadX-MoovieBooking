
const mongoose = require ("mongoose")
const express = require("express");
const model = require("./mongo");
const app = express();
const cors = require("cors")
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/MovieBackent").then(()=>{
    app.listen(3000, ()=>{
        console.log("lestening");
    })
})

app.use(cors({
    credentials:true,   
    origin:"*"
}))

app.get("/get", async (req,res)=>{
    const data = await model.find();
    console.log("data")
    res.send(data)
})

  export const verifyPayment = async (req, res) => {
    try {
      const client_id = await jwt.verify(
        req.cookies.userAuthToken,
        process.env.JWT_SIGNATURE
      )?._id;
      const data = req.body;
      const {_id}=await categoryModel.findOne({name:req.body.category})
  
      if (!req.body.job_id) {
        const job=await jobsModel.create({...data,client_id,category:_id,requiredCount:1,experience:0,postedJob:false})
      req.body.job_id=job._id
      }
  
      const razorpayPayment_id =
        data.razorpay_order_id + "|" + data.razorpay_payment_id;
  
      // verifying payment using crypto hamac
  
      const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(razorpayPayment_id.toString())
        .digest("hex");
  
      if (expectedSignature === data.razorpay_signature) {
      
        const hiringDate = new Date();
  
        //deleting unwanted from body
        delete data.razorpay_order_id,
          delete data.razorpay_payment_id,
          delete data.razorpay_signature;
        (data.client_id = client_id), (data.hiringDate = hiringDate);
  
        // change date format 
        const startDate=new Date(data.startDate)
        startDate.setDate(startDate.getDate()+1)
        data.startDate=startDate
  
        const endDate=new Date(data.endDate)
        endDate.setDate(endDate.getDate()+1)
        data.endDate=endDate
  
        //uploading to db
        await hiringModel.create({ ...data });await hiringModel.create({ ...data });
  
        return res.json({ success: true, message: "Hired labour successfully" });
      } else {
        return res.json({
          success: false,
          message: "payment verification failed",
        });
      }
    } catch (error) {
      console.log("Error", error);
      res.json({ success: false, message: "Unknown error occured" });
    }
    };