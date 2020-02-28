let xx;

	fetch("https://api.coinlore.net/api/global/")
  .then(response => response.json())
  .then(result =>{ 
		
		console.log(result.active_markets)

	   xx = result[0];
	   
				 }  )
		
  .catch(error => console.log('error', error));
		
		
		let zz;
	fetch("https://api.coinlore.net/api/ticker/?id=90")
  .then(response => response.json())
  .then(result =>{ 
		
		console.log(result.active_markets)

	   zz = result[0];
	   
				 }  )
	.catch(error => console.log('error', error));

	
		
		var dropdown = document.querySelector(".dropdown-tool");
	function xxx () {
		dropdown.classList.toggle("dropdown-tool_active");
		console.log(1);
	}
		
	
	//global area
		var activeMarkets = document.querySelector(".global_act-markets")
		var totalMarketcap = document.querySelector(".global_vol-change")
		var btcPrice = document.querySelector(".global_btc-price")
		var ethPrice = document.querySelector(".global_eth-price");
				var totalMarketcap = document.querySelector(".global_total-marketcap");

		var marketplaceChange = document.querySelector(".global_marketcap-change")
		var volChange = document.querySelector(".global_vol-change")
		var avgChange = document.querySelector(".global_avg-change")
		var volATH = document.querySelector(".global_vol-ath")
		var marketplaceATH = document.querySelector(".global_marketplace-ath")


let globalData;
function fetchGlobal(){

	fetch("https://api.coinlore.net/api/global/")
 .then(response => response.json())
  .then(result =>{ 
		
		globalData = result[0];
		console.log(globalData);
		//change dataxxxxx
activeMarkets.innerHTML = globalData.active_markets;
		totalMarketcap.innerHTML = globalData.total_mcap;
		btcPrice.innerHTML = globalData.btc_d;
		ethPrice.innerHTML = globalData.eth_d;
		marketplaceChange.innerHTML = globalData.mcap_change;
		volChange.innerHTML = globalData.volume_change;
		avgChange.innerHTML = globalData.avg_change_percent;
		marketplaceATH.innerHTML = globalData.mcap_ath;
		totalMarketcap.innerHTML = globalData.total_mcap;
		volATH.innerHTML = globalData.volume_ath
}
	   
	   
	   )
}		
	
		
		
		//area top


let listSymbols = document.getElementsByClassName("list-item-symbol");
let listPrice = document.getElementsByClassName("list-item-price");
let listDay = document.getElementsByClassName("list-item-day");

let topData;

	function fetchTop(){

	fetch("https://api.coinlore.net/api/tickers/?start=1&limit=5")
 .then(response => response.json())
  .then(result =>{ 
		console.log(result)
		topData = result.data;
		
		for (let i = 0; i < topData.length; i++){
		
			listSymbols[i].innerHTML = topData[i].symbol;
			listPrice[i].innerHTML = topData[i].price_usd;
			listDay[i].innerHTML = topData[i].percent_change_24h;

			console.log(i);
			
		}
	}
	
	)
		
		
	}

	
	//MAIN COIN

var coinPrice = document.querySelector(".coin-data-title_price");
var coinName = document.querySelector(".coin-data-title_name");
var coinChange24h = document.querySelector(".coin-data-title_change24h");
var coinRank = document.querySelector(".coin-data-title_rank");
var coinChange7d = document.querySelector(".coin-data-title_change7d");


	
function fetchMainCoin(id){
	fetch(`https://api.coinlore.net/api/ticker/?id=${id}`)
 	.then(response => response.json())
  	.then(result =>{ 
		console.log(result)
		
		var mainCoinData = result[0];

		coinPrice.innerHTML = `${mainCoinData.price_usd}$`;
		coinName.innerHTML = `${mainCoinData.name}`;
		coinChange24h.innerHTML = `${mainCoinData.percent_change_24h}`;
	}
		  
)}


function searchAll(){
	
	fetchGlobal();
	fetchMainCoin(90);
	fetchTop()
}
window.onload = searchAll()



