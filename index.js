//let input=document.querySelector('#in')
//let btn=document.querySelector('#btn')

const axios=require('axios');
require('dotenv').config()
const {Client, GatewayIntentBits}= require('discord.js')
const client = new Client({intents:[GatewayIntentBits.Guilds,GatewayIntentBits.MessageContent,GatewayIntentBits.GuildMessages]})
const currency=require("node-currency-exchange-rates");
const amoutn=1;
const fromCurrency="USD";
const toCurrency="VES";





client.on("ready",()=>{
    console.log('el bot esta listo');
    example();

})



client.on('messageCreate',async(message)=>{
    if(message.content=="hola"){
        message.reply({
            content:'bienvenido a nustro canal'
        })
    }else if(message.content==='ping'){
        message.reply({
            content:'pong'
        })
        
    }else if(message.content==='frase'){
        let response= await axios.get('https://api.quotable.io/random');
        const quote= response.data.content;

        message.reply({
            content:quote
        })
    }else if(message.content==="U"){
       
        message.reply({
            content:"hola"
        })
        
    }
    
    
 
})

client.login(process.env.DISCOR_BODT);

const example = async () => {
    const convertedValue = await currency.convert(fromCurrency,amoutn,toCurrency);
    response=convertedValue.toString();
    console.log(response);
    botCrearMensage(response);
    
};

function botCrearMensage(response){
    client.on("messageCreate",async(message)=>{
        if(message.content=="dolar"){
            message.reply({
                content:`${amoutn} ${fromCurrency} = ${response} ${toCurrency}`
            })
        }
    })
}

  
/*
  currency.convert(fromCurrency,amoutn,toCurrency)
  .then(result=>{
      console.log(`${amoutn} ${fromCurrency} = ${result} ${toCurrency}`)
  
  })
  .catch(error=>{
      console.log("Error",error);
  })*/