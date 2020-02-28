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

	</script>
	
	<script>
		
		var dropdown = document.querySelector(".dropdown-tool");
	function xxx () {
		dropdown.classList.toggle("dropdown-tool_active");
		console.log(1);
	}
		
	
	
	</script>
	<script>
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
	
fetchGlobal();
		
		
		//area top
		let topData;
	function fetchTop(){

	fetch("https://api.coinlore.net/api/tickers/?start=1&limit=10")
 .then(response => response.json())
  .then(result =>{ 
		console.log(result)
		topData = result.data;
	})
	}


