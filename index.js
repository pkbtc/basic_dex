import express from 'express';
const app=express();
app.use(express.json());
let ETH_BAL=200;
let USDC_BAL=7000000;
app.post('/add-liquidity',(req,res)=>{

})
app.post('/buy-asset',(req,res)=>{
        const quantity=req.body.quantity;
        const updatedEthQunatity=ETH_BAL-quantity;
        const updatedUsdcQuantity=ETH_BAL*USDC_BAL/updatedEthQunatity;
        const paidAmount=updatedUsdcQuantity-USDC_BAL;
        ETH_BAL=updatedEthQunatity;
        USDC_BAL=updatedUsdcQuantity;
        res.send({
            message:`you paid ${paidAmount} usdc for qunatity of ${quantity} eth`
        })
});
app.post('/sell-asset',(req,res)=>{
    const quantity=req.body.quantity;
    const updatedEthQunatity=ETH_BAL+quantity;
    const updatedUsdcQuantity=ETH_BAL*USDC_BAL/updatedEthQunatity;
    const receivedAmount=USDC_BAL-updatedUsdcQuantity;
    ETH_BAL=updatedEthQunatity;
    USDC_BAL=updatedUsdcQuantity;
    res.send({
        message:`you received ${receivedAmount} usdc for qunatity of ${quantity} eth`
    })
});
app.post('/quote',(req,res)=>{

});
app.listen(3000,()=>{
    console.log('server is running on port 3000');
})