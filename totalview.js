var crude = "CLN2 CLQ2 CLU2 CLV2 CLX2 CLZ2 CLF3 CLG3 CLH3 CLJ3 CLK3 CLM3 CLN3 CLQ3 CLU3 CLV3 CLX3 CLZ3 CLF4 CLG4 CLH4 CLJ4 CLK4 CLM4 CLN4 CLQ4 CLU4 CLV4 CLX4 CLZ4 CLF5 CLG5 CLH5 CLJ5 CLK5 CLM5 CLN5 CLQ5 CLU5 CLV5 CLX5 CLZ5 CLF6 CLG6 CLH6 CLJ6 CLK6 CLM6 CLN6 CLQ6 CLU6 CLV6 CLX6 CLZ6 CLF7 CLG7 CLH7 CLJ7 CLK7 CLM7 CLN7 CLQ7 CLU7 CLV7 CLX7 CLZ7 CLM8 CLZ8 CLM9 CLZ9 CLM0 CLZ0";
var crudeAndNames = "CLN2-CLc1;CLQ2-CLc2;CLU2-CLc3;CLV2-CLc4;CLX2-CLc5;CLZ2-CLc6;CLF3-CLc7;CLG3-CLc8;CLH3-CLc9;CLJ3-CLc10;CLK3-CLc11;CLM3-CLc12;CLN3-CLc13;CLQ3-CLc14;CLU3-CLc15;CLV3-CLc16;CLX3-CLc17;CLZ3-CLc18;CLF4-CLc19;CLG4-CLc20;CLH4-CLc21;CLJ4-CLc22;CLK4-CLc23;CLM4-CLc24;CLN4-CLc25;CLQ4-CLc26;CLU4-CLc27;CLV4-CLc28;CLX4-CLc29;CLZ4-CLc30;CLF5-CLc31;CLG5-CLc32;CLH5-CLc33;CLJ5-CLc34;CLK5-CLc35;CLM5-CLc36;CLN5-CLc37;CLQ5-CLc38;CLU5-CLc39;CLV5-CLc40;CLX5-CLc41;CLZ5-CLc42;CLF6-CLc43;CLG6-CLc44;CLH6-CLc45;CLJ6-CLc46;CLK6-CLc47;CLM6-CLc48;CLN6-CLc49;CLQ6-CLc50;CLU6-CLc51;CLV6-CLc52;CLX6-CLc53;CLZ6-CLc54;CLF7-CLc55;CLG7-CLc56;CLH7-CLc57;CLJ7-CLc58;CLK7-CLc59;CLM7-CLc60;CLN7-CLc61;CLQ7-CLc62;CLU7-CLc63;CLV7-CLc64;CLX7-CLc65;CLZ7-CLc66;CLM8-CLc67;CLZ8-CLc68;CLM9-CLc69;CLZ9-CLc70;CLM0-CLc71;CLZ0-CLc72"
var crudeAndNamesAndAggregate = "CLN2-CLc1-AGG1;CLQ2-CLc2-AGG2;CLU2-CLc3-AGG1;CLV2-CLc4-AGG1;CLX2-CLc5-AGG1;CLZ2-CLc6-AGG1;CLF3-CLc7-AGG2;CLG3-CLc8-AGG2;CLH3-CLc9-AGG2;CLJ3-CLc10-AGG3;CLK3-CLc11-AGG3;CLM3-CLc12-AGG3;CLN3-CLc13-AGG3;CLQ3-CLc14-AGG3;CLU3-CLc15-AGG3;CLV3-CLc16-AGG3;CLX3-CLc17-AGG3;CLZ3-CLc18-AGG3;CLF4-CLc19-AGG3;CLG4-CLc20;CLH4-CLc21-AGG4;CLJ4-CLc22-AGG4;CLK4-CLc23-AGG4;CLM4-CLc24-AGG4;CLN4-CLc25-AGG4;CLQ4-CLc26-AGG4;CLU4-CLc27-AGG4;CLV4-CLc28-AGG4;CLX4-CLc29;CLZ4-CLc30-AGG5;CLF5-CLc31-AGG5;CLG5-CLc32-AGG5;CLH5-CLc33-AGG5;CLJ5-CLc34-AGG5;CLK5-CLc35;CLM5-CLc36-AGG6;CLN5-CLc37-AGG6;CLQ5-CLc38-AGG6;CLU5-CLc39-AGG6;CLV5-CLc40-AGG6;CLX5-CLc41-AGG6;CLZ5-CLc42-AGG6;CLF6-CLc43-AGG6;CLG6-CLc44-AGG6;CLH6-CLc45-AGG6;CLJ6-CLc46-AGG6;CLK6-CLc47-AGG6;CLM6-CLc48-AGG6;CLN6-CLc49-AGG6;CLQ6-CLc50-AGG6;CLU6-CLc51-AGG6;CLV6-CLc52-AGG6;CLX6-CLc53-AGG6;CLZ6-CLc54-AGG6;CLF7-CLc55-AGG6;CLG7-CLc56-AGG6;CLH7-CLc57-AGG6;CLJ7-CLc58-AGG6;CLK7-CLc59-AGG6;CLM7-CLc60-AGG6;CLN7-CLc61-AGG6;CLQ7-CLc62-AGG6;CLU7-CLc63-AGG6;CLV7-CLc64-AGG6;CLX7-CLc65-AGG6;CLZ7-CLc66-AGG6;CLM8-CLc67-AGG6;CLZ8-CLc68-AGG6;CLM9-CLc69-AGG6;CLZ9-CLc70-AGG6;CLM0-CLc71-AGG6;CLZ0-CLc72-AGG6"
var crudeAndNamesAndAggregateAndDepth = "CLN2-CLc1-AGG1-1;CLQ2-CLc2-AGG1-2;CLU2-CLc3-AGG1-2;CLV2-CLc4-AGG1-2;CLX2-CLc5-AGG1-2;CLZ2-CLc6-AGG1-2;CLF3-CLc7-AGG2-2;CLG3-CLc8-AGG2-2;CLH3-CLc9-AGG2-2;CLJ3-CLc10-AGG3-2;CLK3-CLc11-AGG3-1;CLM3-CLc12-AGG3-2;CLN3-CLc13-AGG3-2;CLQ3-CLc14-AGG3-2;CLU3-CLc15-AGG3-2;CLV3-CLc16-AGG3-1;CLX3-CLc17-AGG3-2;CLZ3-CLc18-AGG3-2;CLF4-CLc19-AGG3-2;CLG4-AGG4-CLc20-2;CLH4-CLc21-AGG4-1;CLJ4-CLc22-AGG4-2;CLK4-CLc23-AGG4-2;CLM4-CLc24-AGG4-2;CLN4-CLc25-AGG4-2;CLQ4-CLc26-AGG4-1;CLU4-CLc27-AGG4-2;CLV4-CLc28-AGG4-2;CLX4-CLc29-2;CLZ4-CLc30-AGG5-2;CLF5-CLc31-AGG5-1;CLG5-CLc32-AGG5-2;CLH5-CLc33-AGG5-2;CLJ5-CLc34-AGG5-2;CLK5-CLc35-2;CLM5-CLc36-AGG6-1;CLN5-CLc37-AGG6-2;CLQ5-CLc38-AGG6-2;CLU5-CLc39-AGG6-2;CLV5-CLc40-AGG6-2;CLX5-CLc41-AGG6-1;CLZ5-CLc42-AGG6-2;CLF6-CLc43-AGG6-2;CLG6-CLc44-AGG6-2;CLH6-CLc45-AGG6-2;CLJ6-CLc46-AGG6-1;CLK6-CLc47-AGG6-2;CLM6-CLc48-AGG6-2;CLN6-CLc49-AGG6-2;CLQ6-CLc50-AGG6-2;CLU6-CLc51-AGG6-1;CLV6-CLc52-AGG6-2;CLX6-CLc53-AGG6-2;CLZ6-CLc54-AGG6-2;CLF7-CLc55-AGG6-2;CLG7-CLc56-AGG6-1;CLH7-CLc57-AGG6-2;CLJ7-CLc58-AGG6-2;CLK7-CLc59-AGG6-2;CLM7-CLc60-AGG6-2;CLN7-CLc61-AGG6-1;CLQ7-CLc62-AGG6-2;CLU7-CLc63-AGG6-2;CLV7-CLc64-AGG6-2;CLX7-CLc65-AGG6-2;CLZ7-CLc66-AGG6-1;CLM8-CLc67-AGG6-2;CLZ8-CLc68-AGG6-2;CLM9-CLc69-AGG6-2;CLZ9-CLc70-AGG6-2;CLM0-CLc71-AGG6-1;CLZ0-CLc72-AGG6-2";
var DowJones = "AA.N DIS.N KFT.OQ PG.N AXP.N GE.N KO.N T.N BA.N HD.N MCD.N TRV.N BAC.N HPQ.N MMM.N UTX.N CAT.N IBM.N MRK.N VZ.N CSCO.OQ INTC.OQ MSFT.OQ WMT.N CVX.N JNJ.N PFE.N XOM.N DD.N JPM.N";
var DowJoneAndNamesAndAggregateAndDepth = "KFTOQ-KFRAFTFoods-AGG1-2;AAN-Alcoa-AGG1-1;DISN-Disney-AGG1-1;PGN-Proctor Gamble-AGG2-2;AXPN-Axa Partners-AGG3-1";
var EuroDollar   = "EDN2 EDQ2 EDU2 EDV2 EDX2 EDZ2 EDH3 EDM3 EDU3 EDZ3 EDH4 EDM4 EDU4 EDZ4 EDH5 EDM5 EDU5 EDZ5 EDH6 EDM6 EDU6 EDZ6 EDH7 EDM7 EDU7 EDZ7 EDH8 EDM8 EDU8 EDZ8 EDH9 EDM9 EDU9 EDZ9 EDH0 EDM0 EDU0 EDZ0 EDH1 EDM1 EDU1 EDZ1 EDH2 EDM2"

var crudeBenchmarks = "CLN2-5YUST-1MUST,3MUST,6MUST,1YUST,2YUST,3YUST,5YUST,7YUST,10YUST,30YUST CLQ2-5YUST-1MUST,3MUST,6MUST,1YUST,2YUST,3YUST,5YUST,7YUST,10YUST,30YUST";

var actualBBQSymbols = "553191248-BABC 7.875 20$-BABC-1;595191144-BANBRA   23-BBRA-2;555728560-BANBRA 5.87523-BBRA-2;553191456-BBMG 6.500 14$-BBMG-1;553192080-BBMG 8.000 18$-BBMG-1;553192496-BBMG 8.875 20$-BBMG-1;553191664-BBMG 9.150 16$-BBMG-1;553191872-BBMG 9.625 17$-BBMG-1;553192288-BBMG 9.950 19$-BBMG-1;553195824-BBRA 3.875 17$-BBRA-1;553195408-BBRA 4.500 15$-BBRA-1;553196864-BBRA 5.375 21$-BBRA-1;553196032-BBRA 5.875 22$-BBRA-1;553197488-BBRA 6.000 20$-BBRA-1;553195200-BBRA 8.500 14$-BBRA-1;553198320-BBRA 8.500 XX$-BBRA-1;553198112-BBRA 9.250 XX$-BBRA-1;553204144-BDES 5.500 20$-BDES-1;553203728-BDES 6.369 18$-BDES-1;553203936-BDES 6.500 19$-BDES-1;553203104-BESI 5.625 15$-BESI-1;553202064-BGRA 7.375 22$-BGRA-1;553197696-BICB 5.250 15$-BICB-1;553197904-BICB 6.250 13$-BICB-1;553196656-BICB 8.500 20$-BICB-1;553198944-BPAN 8.500 20$-BPAN-1;553210384-BR 10.125 27$-BR-1;553207056-BR 10.250 13$-BR-1;553207264-BR 10.500 14$-BR-1;553209344-BR 4.875 21$-BR-1;553211632-BR 5.625 41$-BR-1;553208720-BR 5.875 19$-BR-1;553208096-BR 6.000 17$-BR-1;553211216-BR 7.125 37$-BR-1;553207472-BR 7.375 15E-BR-1;553211008-BR 8.250 34$-BR-1;553206848-BR 8.500 12E-BR-1;553210176-BR 8.750 25$-BR-1;553193328-BRAD 2.566 14$-BRAD-1;553192704-BRAD 3.125 13$-BRAD-1;553193536-BRAD 4.100 15$-BRAD-1;553193744-BRAD 4.500 17$-BRAD-1;553194368-BRAD 5.750 22$-BRAD-1;553194160-BRAD 5.900 21$-BRAD-1;553193952-BRAD 6.750 19$-BRAD-1;598057424-BRADES 13-BR-2;598062680-BRADES 19-BR-2;555730312-BRADES6.75 19-BR-2;595132744-BRASKM   22-BR-2;592886240-BRAZIL 5Y-BR-2;553206016-BRSK 5.750 21$-BRSK-1;553205808-BRSK 7.000 20$-BRSK-1;553206432-BRSK 7.125 41$-BRSK-1;553205600-BRSK 7.250 18$-BRSK-1;553199360-BSAF 3.500 14$-BSAF-1;553200192-BSAF 6.750 21$-BSAF-1;553201024-BVOR 4.250 13$-BVOR-1;553201440-BVOR 5.250 16$-BVOR-1;553201856-BVOR 7.375 20$-BVOR-1;553194784-CRUZ 8.250 16$-CRUZ-1;553194576-CRUZ 8.500 15$-CRUZ-1;553194992-CRUZ 8.875 20$-CRUZ-1;455592720-CSNA 10.000 15$-CSNA-1;455592304-CSNA 6.500 20$-CSNA-1;455592512-CSNA 6.875 19$-CSNA-1;455592096-CSNA 7.000 XX$-CSNA-1;455592928-CSNA 9.750 13$-CSNA-1;455596672-CVRD 4.375 22$-CVRD-1;455597088-CVRD 6.875 36$-CVRD-1;455597296-CVRD 6.875 39$-CVRD-1;456246848-EMBRA      22-BR-2;553217872-GERD 5.750 21$-GERD-1;553217664-GERD 7.000 20$-GERD-1;553217456-GERD 7.250 17$-GERD-1;553218288-GLBO 4.875 22$-GLBO-1;553220784-ITAU 5.650 22$-ITAU-1;553220368-ITAU 5.750 21$-ITAU-1;553220160-ITAU 6.200 20$-ITAU-1;553220576-ITAU 6.200 21$-ITAU-1;455585648-MNRV 10.875 19$-MNRV-1;455586064-NETB 7.500 20$-NETB-1;553197280-NORB 3.625 15$-NORB-1;553197072-NORB 4.375 19$-NORB-1;555701112-ODBR       23-ODBR-2;455586272-ODBR 12.375 17$-ODBR-1;455586896-ODBR 6.000 23$-ODBR-1;455586688-ODBR 7.000 20$-ODBR-1;555698776-ODBR 7.5   17-ODBR-2;455587104-ODBR 7.500 XX$-ODBR-1;455587520-OGXP 8.375 22$-OGXP-1;473634608-PETBRA 14-BR-2;473635192-PETBRA 15-BR-2;555708120-PETBRA2.87515-BR-2;555716296-PETBRA5.75 20-BR-2;555715128-PETBRA7.87519-BR-2;455588560-PETR 3.500 17$-PETR-1;455588144-PETR 3.875 16$-PETR-1;455588976-PETR 4.875 18E-PETR-1;455589808-PETR 5.375 21$-PETR-1;455589600-PETR 5.750 20$-PETR-1;455588768-PETR 5.875 18$-PETR-1;455588352-PETR 6.125 16$-PETR-1;455590848-PETR 6.750 41$-PETR-1;455590432-PETR 6.875 40$-PETR-1;455589184-PETR 8.375 18$-PETR-1;455591264-QGOG 5.250 18$-QGOG-1;553200608-SANB 4.250 16$-SANB-1;553213920-SCHN 5.875 23$-SCHN-1;455594592-TLMP 5.500 20$-TLMP-1;455594800-TLMP 5.750 22$-TLMP-1";
var actualBBQSymbolsMini = "553191248-BABC 7.875 20$-BABC-1;595191144-BANBRA   23-BBRA-2;555728560-BANBRA 5.87523-BBRA-2;553191456-BBMG 6.500 14$-BBMG-1;473635192-PETBRA 15-BR-2";
var actualBBQSymbols2 = "CL98-BBRA 8.500 XX$-AGG1-1;270498872-BBRA 9.250 XX$-BBRA-1;270496792-BBRA 8.500 14$-BBRA-1;270497000-BBRA 4.500 15$-BBRA-1;270497416-BBRA 3.875 17$-BBRA-1;270499496-BBRA 6.000 20$-BBRA-1;270499080-BBRA 5.375 21$-BBRA-1;270498248-BBRA 5.875 22$-BBRA-1;272062296-EMBRA      17-BR-2;402523624-BRADES6.75 19-BR-2;410779136-BRAZIL 1Y-BR-2;270508856-BR 10.500 14$-BR-1;270509272-BR 7.875 15$-BR-1;270509480-BR 12.500 16 BRL-BR-1;270510312-BR 5.875 19$-BR-1;270510520-BR 8.875 19$-BR-1;270510728-BR 12.750 20$-BR-1;270510936-BR 4.875 21$-BR-1;270511144-BR 12.500 22 BRL-BR-1;270511560-BR 8.875 24$-BR-1;270511768-BR 8.750 25$-BR-1;270511976-BR 10.125 27$-BR-1;270512184-BR 10.250 28 BRL-BR-1;270512392-BR 12.250 30$-BR-1;270512600-BR 8.250 34$-BR-1;270512808-BR 7.125 37$-BR-1;270513016-BR 11.000 40$-BR-1;270495752-BRAD 5.900 21$-BRAD-1;270495960-BRAD 5.750 22$-BRAD-1;410777904-BRAZIL 6M-BR-2;270507608-BRSK 5.750 21$-BRSK-1;406131856-BRZ 24 BRL-BR-2;270500120-BTGP 4.875 16$-BTGP-1;270504904-BVSP 5.500 20$-BVSP-1;270516344-COSN 9.500 XX$-COSN-1;270496584-CRUZ 8.875 20$-CRUZ-1;265586536-CSNA 9.750 13$-CSNA-1;270514888-CTUP 9.750 18$-CTUP-1;267076448-CVRD 4.625 20$-CVRD-1;270516552-DCVL 6.250 16$-DCVL-1;270517176-ELEB 5.750 21$-ELEB-1;270517592-EMBR 6.375 20$-EMBR-1;270518216-FIBR 7.500 20$-FIBR-1;270518424-FIBR 6.750 21$-FIBR-1;270520088-GLBO 5.307 22$-GLBO-1;270521336-HYPM 6.500 21$-HYPM-1;270521752-ITAU 6.200 20$-ITAU-1;270521960-ITAU 5.750 21$-ITAU-1;270522376-ITAU 5.650 22$-ITAU-1;270504280-JBSS 8.250 18$-JBSS-1;270523000-MARF 8.375 18$-MARF-1;265593400-PETR 3.875 16$-PETR-1;265589864-PETR 6.750 41$-PETR-1;265588616-QGOG 5.250 18$-QGOG-1";



//----------------------------------------GLOBAL VARIABLE START------------------------------------------
var refBook;
var refPricer;
var ViewID;
var globalHideEmpty;
var cache;
var currentDepthTradesSymbol; //used to store symbol for which depth and trades is currently being shown (and whether it's currently displayed or not)
var currentDepthTradesSymbolName; //used to store symbol name  for which depth and trades is currently being shown
var resetTable; //in newInstrument controls whether a new timer should be started for resetodd even colored rows
var tradeOnTopOrBottom; // variable used in toggleDepthAndTrades() and toggleTradesIntoBrokerPages() to determine where to paint the raw data table after user clicks on broker code in the depth table
var rawDataShowing; // boolean used to see if raw data table is currently displayed or not
//----------------------------------------GLOBAL VARIABLE END---------------------------------------



// -------------------------- API Definition START ------------------------------------
document.hookBook 			= _hookBook;
document.hookPricer   		= _hookPricer;
document.newInstrument 		= _newInstrument;
document.expireInstrument 	= _expireInstrument;
document.setListLabel 		= _setListLabel;
document.initialiseTable 	= _initialiseTable;
document.updateBenchmarks 	= _updateBenchmarks;
document.dataUpdate 		= _dataUpdate;
document.tradesUpdate 		= _tradesUpdate;
document.depthUpdate 		= _depthUpdate;
document.tradesAvailable	= _tradesAvailable;
document.destroyTable	    = _destroyTable;
document.updateBrokerPageRow = _updateBrokerPageRow;
document.writeBrokerName    = _writeBrokerName;
document.initialiseAllFilterDropDowns = _initialiseAllFilterDropDowns;
document.initialiseDropDownSubSector  = _initialiseDropDownSubSector;
document.newQuote 					  = _newQuote;
//document.unExpireInstrument 			= _unExpireInstrument;
// -------------------------- API Definition END ------------------------------------


// -------------------------- Initialise START --------------------------------------



function _hookBook (myBookRef,View,Region,Country,Sector) 
{
	ViewID  = View; 
	refBook = myBookRef; 
	cache 	= {};
	resetTable = true; //on start, you should always start newInstrument timer

	//setHeaders();

}
function _hookPricer(myPricerRef)
{
	refPricer = myPricerRef;
}

// --------------------------- Initialise END ------------------------------------------------




// -------------------------- NanoScroller START ----------------------------------------------
function resetNanoWindowSize()
{
	var viewportWidth = $(window).width()-17;
	var viewportHeight = $(window).height()-100;

	$("#application").find(".nano").css(
	{
		width:viewportWidth,
		height:viewportHeight

	});
	$("#tablecontent").css(
	{
	 	width:viewportWidth +17,
	 	height:viewportHeight 
	})

	$("#application .nano").nanoScroller();
}
(function($,sr){
  var debounce = function (func, threshold, execAsap) {
      var timeout;
 
      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null; 
          };
 
          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);
 
          timeout = setTimeout(delayed, threshold || 100); 
      };
  }
		
	jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };
	 
})(jQuery,'smartresize');

$(window).smartresize(function()
{
	resetNanoWindowSize();
});
// -------------------------- NanoScroller END ----------------------------------------------







// -------------------------- EVENTS START ----------------------------------------------
if (navigator.appName == "Microsoft Internet Explorer")
{
	document.attachEvent("onclick",createDocEvents);
	
	function createDocEvents(event)
	{
		var target = event.srcElement;

		if(target.className == "depthplusminus")
		{   toggleDepthAndTrades(target); return false;}

		if(target.id == "menucloser")
		{ hideRightClickMenuAndDepthTrades(); return false; }

		if(target.className.search("mylist") != -1)
		{	toggleMyList(target); return false;}

		if(target.className.search("rightclick") != -1)
		{	toggleRightClickBenchMarks(target); return false;}

		if(target.className.search("clickname") != -1)
		{
			var symbol = target.parentNode.id + ";" + target.innerText;
			//refBook.launchBondPopup(symbol);
			//alert("Call VBA function to launch bond popup in Eikon window for:" + symbol);
			return false;
		}
		if(target.id == "moretrades")
		{	
			alert("Call VBA function to launch bond popup in Eikon window for:" + currentDepthTradesSymbol + ";" + currentDepthTradesSymbolName);  
			return false;
		}
		if(target.className.search("brkclick") != -1)
		{
			toggleBrokerPages(target);
			return false;
		}
		if(target.className.search("abrokers") != -1 || target.className.search("bbrokers") != -1)
		{
			toggleTradesIntoBrokerPages(target);
			return false;
		}
		if(target.className.search("bpvalset") != -1)
		{
			turnoffBrokerPages(target);
			return false;
		}
		if(target.id == "filtergo")
		{
			var dd1 = document.getElementById("filterregion");
			var dd2 = document.getElementById("filtercountry"); 
			var dd3 = document.getElementById("filtersector");
			var dd4 = document.getElementById("filtersubsector");

			dd3.detachEvent("onchange",filterformEvent); //prevent memory leak as you're deleting the <select> from DOM
			//document.getElementById("closetable").innerHTML = "filter"; //"&#108;"; //insert the close button/orange dot

			var region = "";
			var country = "";
			var sector = "";
			var subsector = "";
			if (dd4.selectedIndex != -1)
				subsector = dd4.options[dd4.selectedIndex].text;
			else
				subsector = "None";

			region  = dd1.options[dd1.selectedIndex].text;
			country = dd2.options[dd2.selectedIndex].text;
			sector  = dd3.options[dd3.selectedIndex].text;

			clearOutFilter();
			
			//refBook.getInitialiseString(region, country,sector,subsector);

			/* TEST FUNCTION CALLS */
			//alert(dd1.options[dd1.selectedIndex].text + " " +  dd2.options[dd2.selectedIndex].text + " " + dd3.options[dd3.selectedIndex].text + " " + subsector);
			//_setListLabel("Hello");	
			//_initialiseTable(crudeAndNamesAndAggregateAndDepth,"Crude","fullview","","");
			// _initialiseTable(DowJoneAndNamesAndAggregateAndDepth,"DowJones","fullview","","");			
		}
		if(target.id == "closetable")
		{
			_destroyTable();
			document.getElementById("fixedheader").innerHTML = "";
			document.getElementById("closetable").innerHTML  = "";
			_setListLabel("Choose Something. Anything.");	

			createForm();
			
			/* WHEN VBA RECIVES THIS EVENT, IT SHOULD CALL _initialiseAllFilterDropDowns()*/
			//refBook.tableClosed();

			return false;
		}
	}

	document.attachEvent("oncontextmenu",createRightClickEvent);
	function createRightClickEvent(event)
	{
		var target = event.srcElement.parentNode; //parentNode because user clicks on cell, and you need row
		if(target.getAttribute("depthRow") == "false")	
		{ showRightClickMenu(target); return false;}

		if(event.srcElement.className.search("clickname") != -1)
		{
			var symbol = event.srcElement.parentNode.id + ";" + event.srcElement.innerText;
			alert("Call VBA function to launch bond popup in a separate  window for:" + symbol);
			return false;
		}

		return false;
	}
}

/* SYNOPSIS	- Even after nanoscroller has been disabled (stop:true), you can still 
	scroll with the wheel and via up/down/pageup/pagedown. So this function deals 
	with that by registering handlers that will hide the right click menu or depth/trades 
	popup when any of the events below happen. Note it's only called when the 
	rightclick menu or the depth/trades popup is displayed. 
	So it's an invoke->attachEvent->Hide menus/popups->detachEvent
*/			
function handleNanoScrollerEventBug()
{
	document.attachEvent("onmousewheel",mouseWheel);

	function mouseWheel(event)
	{
		hideRightClickMenuAndDepthTrades();
		document.detachEvent("onmousewheel",mouseWheel);
	}

	document.attachEvent("onkeydown",upDownPageUpPageDown);
	
	function upDownPageUpPageDown(event)
	{
		hideRightClickMenuAndDepthTrades();
		document.detachEvent("onkeydown",mouseWheel);
	}
}

// -------------------------- EVENTS END ----------------------------------------------






// -------------------------- FILTER FORM START ----------------------------------------------
// SYNOPSIS - 
// 1. Gets called in the begining under hookbook to initalise the form
// 2. Gets the Region, Country and Sector init strings from VBA
// 3. The sub sector drop down is dependent on Sector, so is dynamically populated from VBA via the on change event.filtergo button
// 4. The filtergo button send the values of the drop downs to vba which in turn should use them to call the initialise table function
// 5. The closetable() function destrys the table and the headers, then resets the form
// 
// VBA CALLBACKS:
// 1. refBook.getSector(target.options[target.selectedIndex].text); - passes the value of setor to VBA, which in turn shoudl call _initialiseDropDownSubSector("Oil;Gas;Heating Oil") to initilias sub sector
// 2. refBook.getInitialiseString() - passes the values of all the filters to VBA, which in turn should call _initialiseTable()
// 3. //refBook.tableClosed() - call back for vba indicating that _initialiseAllFilterDropDowns(Region,Country,Sector) should be invoked in vba to populated dropdowns
function _initialiseAllFilterDropDowns(Region,Country,Sector)
{
	$("#filterplaceholder").css("height","500px");
	_setListLabel("Choose something. Anything.");	
	createForm();
	initialiseDropDownRegion(Region);
	initialiseDropDownCountry(Country);
	initialiseDropDownSector(Sector);
}

function createForm()
{
	var rowTemplate = [];
	var k 			= 0;
	rowTemplate[k++] = '<ul id="filter">'; 
	rowTemplate[k++] = '<li><label class="filterlabel">Region:</label><select tabindex=1 id="filterregion"></select></li>';
	rowTemplate[k++] = '<li><label class="filterlabel">Country:</label><select  tabindex=2 id="filtercountry"></select></li>';
	rowTemplate[k++] = '<li><label class="filterlabel">Sector:</label><select tabindex=3 id="filtersector"></select></li>';
	rowTemplate[k++] = '<li><label class="filterlabel">Subsector:</label><select tabindex=4 id="filtersubsector"></select></li>';
	rowTemplate[k++] =	'<li><label class="filterlabel"></label><div class="button"><A tabindex=5 HREF="#" id="filtergo" class="buttontextfilter">GO. Now.</A></div></li></ul>';

	document.getElementById("filterplaceholder").innerHTML = rowTemplate.join("");
	document.getElementById("closetable").innerHTML = "";
}

function initialiseDropDownRegion(dropdown1val)
{
	var dropdownElem = document.getElementById("filterregion");
	var ddval = dropdown1val.split(";");
	for(var i=0;i<ddval.length;i++)
	{
		dropdownElem.options[i] = new Option(ddval[i],i);	
	}
}

function initialiseDropDownCountry(dropdown2val)
{
	var ddval = dropdown2val.split(";");
	for(var i=0;i<ddval.length;i++)
	{
		document.getElementById("filtercountry").options[i] = new Option(ddval[i],i);	
	}
}

function initialiseDropDownSector(dropdown3val)
{
	var dropdownElem = document.getElementById("filtersector");
	var ddval = dropdown3val.split(";");
	for(var i=0;i<ddval.length;i++)
	{
		dropdownElem.options[i] = new Option(ddval[i],i);	
	}
	dropdownElem.attachEvent("onchange",filterformEvent);
}

function filterformEvent(event)
{
	var target = event.srcElement;

	if(target.id == "filtersector")
	{
		if(target.options[target.selectedIndex].text == "None")
		{
			document.getElementById("filtersubsector").options.length = 0;
		}
		else
		{
			//alert(target.options[target.selectedIndex].text); 
			//refBook.getSector(target.options[target.selectedIndex].text);
			//_initialiseDropDownSubSector("Oil;Gas;Heating Oil");			 
		}
	}
	return false;
}

function _initialiseDropDownSubSector(dropdown4val)
{
	var ddval = dropdown4val.split(";");
	for(var i=0;i<ddval.length;i++)
	{
		document.getElementById("filtersubsector").options[i] = new Option(ddval[i],i);	
	}
}
function clearOutFilter()
{
	var filterplaceholder = document.getElementById("filterplaceholder")
	filterplaceholder.innerHTML = "";
	filterplaceholder.style.height = 0;
	document.getElementById("closetable").innerHTML = "";
	document.getElementById("listlabel").innerHTML = "";
}
// -------------------------- FILTER FORM END   ----------------------------------------------





// ------------------------- Add/Remove Bond Start --------------------------------
/*
	SYNOPSYS: Provides a different way of inserting than the _newInstrument method, 
	Here the VBA will specify which symbol the new quote/instrument should be inserted after. 
	If index is "", then insert at the front
*/
function _newQuote(symbol,symbolName,symType,index) 
{
	var table 		 = document.getElementById("totalview");
	
	var rowTemplate = [];
	var k 			= 0;
	rowTemplate[k++] = '<TR id="#isin" class="odd flash" grouping="#issuer" depthRow="false" >'; 	//[0]
	rowTemplate[k++] = '<TD class="name" id="#bbqnameid"><img class="noimage" src="blank.png"/><span class="clickname">#bbqName<span></TD>'; 	//[1] 						

	rowTemplate[k++] = '<TD class="time" id="#bbqTimeBid">&nbsp;</TD>'; 							//[2]
	rowTemplate[k++] = '<TD class="brokers" id="#bbqBbrkrs">&nbsp;</TD>'; 							//[3]
	rowTemplate[k++] = '<TD class="trades"  id="#bbqBTrade">&nbsp;</TD>'; 							//[4]
	rowTemplate[k++] = '<TD class="size"    id="#bbqBSize">&nbsp;</TD>'; 							//[5]
	rowTemplate[k++] = '<TD class="bid"     id="#bbqNameBid">&nbsp;</TD>'; 							//[6]
	rowTemplate[k++] = '<TD class="ask"     id="#bbqNameAsk">&nbsp;</TD>';							//[7]
	rowTemplate[k++] = '<TD class="size" 	id="#bbqASize">&nbsp;</TD>'; 							//[8]
	rowTemplate[k++] = '<TD class="trades"  id="#bbqATrade">&nbsp;</TD>'; 							//[9]
	rowTemplate[k++] = '<TD class="brokers" id="#bbqAbrkrs">&nbsp;</TD>'; 							//[10]
	rowTemplate[k++] = '<TD class="time" id="#bbqTimeAsk">&nbsp;</TD>'; 							//[11]
	rowTemplate[k++] = '</TR>'; 	


	rowTemplate[0] = rowTemplate[0].replace('#isin',symbol);
	//rowTemplate[0] = rowTemplate[0].replace('#oddEven',evenOrOddRow);
	// rowTemplate[0] = rowTemplate[0].replace('#issuer',grouping);	
	rowTemplate[1] = rowTemplate[1].replace('#bbqName',symbolName);
	rowTemplate[1] = rowTemplate[1].replace('#bbqnameid',symbol + "NME");

	if(symType == "1")
	{	
		rowTemplate[1] = rowTemplate[1].replace('blank','expand');
		rowTemplate[1] = rowTemplate[1].replace('noimage','depthplusminus');
	}

	rowTemplate[2] = rowTemplate[2].replace('#bbqTimeBid',symbol + "TIMBID");
	rowTemplate[3] = rowTemplate[3].replace('#bbqBbrkrs',symbol + "BRKBID");
	rowTemplate[4] = rowTemplate[4].replace('#bbqBTrade',symbol + "HTBID");
	rowTemplate[5] = rowTemplate[5].replace('#bbqBSize',symbol 	+ "SZBID");
	rowTemplate[6] = rowTemplate[6].replace('#bbqNameBid', symbol + "BID");
	rowTemplate[7] = rowTemplate[7].replace('#bbqNameAsk',symbol  + "ASK");
	rowTemplate[8] = rowTemplate[8].replace('#bbqASize',symbol 	+ "SZASK");
	rowTemplate[9] = rowTemplate[9].replace('#bbqATrade',symbol + "TKASK");
	rowTemplate[10] = rowTemplate[10].replace('#bbqAbrkrs',symbol + "BRKASK");

	rowTemplate[11] = rowTemplate[11].replace('#bbqTimeAsk',symbol + "TIMASK");
	
	rowTemplate = rowTemplate.join("");

	if(index == "")
	{
		$(rowTemplate).insertBefore("#" + table.rows[1].id ); //it's 1, not zero because of the hidden table header
		//alert(table.rows[1].id);	
	}
	else
	{
		$(rowTemplate).insertAfter("#" + index);	//make sure to insert after the hidden MD row of a symbol. 
	}

	if (resetTable == true)  
	{//only reset the row colors every 10 seconds (approx.)
		resetTable = false;
		tableReset();		
	}

	hideRightClickMenuAndDepthTrades();
	window.setTimeout(function(){$("#"+symbol).removeClass("flash");}, 5000)

}


function _newInstrument(symbol,symbolName,grouping,symType)
{
	var $groupLast 	 = $("#totalview").find('tr[grouping="'+ grouping + '"]').last();
	var table 		 = document.getElementById("totalview");
	
	var rowTemplate = [];
	var k 			= 0;
	rowTemplate[k++] = '<TR id="#isin" class="odd flash" grouping="#issuer" depthRow="false" >'; 	//[0]
	rowTemplate[k++] = '<TD class="name" id="#bbqnameid"><img class="noimage" src="blank.png"/><span class="clickname">#bbqName<span></TD>'; 	//[1] 						

	rowTemplate[k++] = '<TD class="time" id="#bbqTimeBid">&nbsp;</TD>'; 							//[2]
	rowTemplate[k++] = '<TD class="brokers" id="#bbqBbrkrs">&nbsp;</TD>'; 							//[3]
	rowTemplate[k++] = '<TD class="trades"  id="#bbqBTrade">&nbsp;</TD>'; 							//[4]
	rowTemplate[k++] = '<TD class="size"    id="#bbqBSize">&nbsp;</TD>'; 							//[5]
	rowTemplate[k++] = '<TD class="bid"     id="#bbqNameBid">&nbsp;</TD>'; 							//[6]
	rowTemplate[k++] = '<TD class="ask"     id="#bbqNameAsk">&nbsp;</TD>';							//[7]
	rowTemplate[k++] = '<TD class="size" 	id="#bbqASize">&nbsp;</TD>'; 							//[8]
	rowTemplate[k++] = '<TD class="trades"  id="#bbqATrade">&nbsp;</TD>'; 							//[9]
	rowTemplate[k++] = '<TD class="brokers" id="#bbqAbrkrs">&nbsp;</TD>'; 							//[10]
	rowTemplate[k++] = '<TD class="time" id="#bbqTimeAsk">&nbsp;</TD>'; 							//[11]
	rowTemplate[k++] = '</TR>'; 	


	rowTemplate[0] = rowTemplate[0].replace('#isin',symbol);
	//rowTemplate[0] = rowTemplate[0].replace('#oddEven',evenOrOddRow);
	rowTemplate[0] = rowTemplate[0].replace('#issuer',grouping);	
	rowTemplate[1] = rowTemplate[1].replace('#bbqName',symbolName);
	rowTemplate[1] = rowTemplate[1].replace('#bbqnameid',symbol + "NME");

	if(symType == "1")
	{	
		rowTemplate[1] = rowTemplate[1].replace('blank','expand');
		rowTemplate[1] = rowTemplate[1].replace('noimage','depthplusminus');
	}

	rowTemplate[2] = rowTemplate[2].replace('#bbqTimeBid',symbol + "TIMBID");

	rowTemplate[3] = rowTemplate[3].replace('#bbqBbrkrs',symbol + "BRKBID");
	rowTemplate[4] = rowTemplate[4].replace('#bbqBTrade',symbol + "HTBID");
	rowTemplate[5] = rowTemplate[5].replace('#bbqBSize',symbol 	+ "SZBID");
	rowTemplate[6] = rowTemplate[6].replace('#bbqNameBid', symbol + "BID");
	rowTemplate[7] = rowTemplate[7].replace('#bbqNameAsk',symbol  + "ASK");
	rowTemplate[8] = rowTemplate[8].replace('#bbqASize',symbol 	+ "SZASK");
	rowTemplate[9] = rowTemplate[9].replace('#bbqATrade',symbol + "TKASK");
	rowTemplate[10] = rowTemplate[10].replace('#bbqAbrkrs',symbol + "BRKASK");

	rowTemplate[11] = rowTemplate[11].replace('#bbqTimeAsk',symbol + "TIMASK");
	
	rowTemplate = rowTemplate.join("");
	
	//some bonds will not have a grouping that already exists in the table
	if($groupLast.length != 0)
	{//group already exists, so add to the end of existing group
	
		$groupLast.after(rowTemplate);
	}
	else 
	{//group doesn't exist, so add to end of the table
		//table.insertAdjacentHTML('beforeend',rowTemplate);
		$("#"+ table.id + " tr:last").after(rowTemplate);
	}
	
	if (resetTable == true)  
	{//only reset the row colors every 10 seconds (approx.)
		resetTable = false;
		tableReset();		
	}

	hideRightClickMenuAndDepthTrades();

	//In case the depth/trades window is open, move the depth together with the row against which it's opened. 
	//Let's not deal with the right click menu at this moment. 
	// if (currentDepthTradesSymbol != undefined)
	// {
	// 	var target = document.getElementById(currentDepthTradesSymbol).firstChild.firstChild;
	// 	var $table = $(document.getElementById("marketdepth"));
	// 	var $trades = $(document.getElementById("trades"));
		
	// 	//caculation that determines if the popup overlaps the bottom of the viewport
	// 	$doc        = $(document);
	// 	$win        = $(window);
	// 	var dTop    = ($(target).offset().top - 25) - $doc.scrollTop();
	// 	var dBottom = $win.height() - dTop - $table.height() - $trades.height(); /* take trades.height out of equation if moving back to side by side*/

	// 	if (dBottom < 0 ) 
	// 	{//150 is the magic hieght of the popup (non-dynamic). There is overlap with the viewport, so paint it above
			
	// 		$("#deptharrow").css("top",140);//move arrow to the bottom of the table, because of viewport obstruction
	// 		$table[0].style.top = $(target).offset().top - 140; //top of the mdtable should be pushed down
	// 		$table[0].style.left = $(target).offset().left + 100;

	// 		//depth and trades side by side		
	// 		// $trades[0].style.top = $(target).offset().top - 127; //top of the trades should be pushed down
	// 		// $trades[0].style.left = $(target).offset().left + $trades.outerWidth() + 60;

	// 		//stacked
	// 		$trades[0].style.left = $(target).offset().left + 100;
	// 		$trades[0].style.top = $(target).offset().top - $table.outerHeight() - 120;


	// 	}
	// 	else
	// 	{
	// 		$("#deptharrow").css("top",25); 
	// 		$table[0].style.top = $(target).offset().top - 25; //align top of md table approx with the current selected row
	// 		$table[0].style.left = $(target).offset().left +100;
			
	// 		//depth and trades side by side
	// 		// $trades[0].style.left = $(target).offset().left + $trades.outerWidth() + 60;
	// 		// $trades[0].style.top = $(target).offset().top -13;

	// 		//stacked
	// 		$trades[0].style.left = $(target).offset().left + 100;
	// 		$trades[0].style.top = $(target).offset().top + $table.outerHeight() - 20;

	// 	}
	// }
	window.setTimeout(function(){$("#"+symbol).removeClass("flash");}, 5000)
	//alert("call vba function to display alert in the main window for:"+ symbol+symbolName+grouping);
}

function tableReset()
{// SYNOPSYS- resetting row colours in every call is too expensive. This function is called everytime resetTable is true, and will reset the 
 // 		  row colours 10 seconds later. Note that rowcolour reset is only triggered by a newinstrument insertion
	window.setTimeout(function(){resetOddEvenColour("totalview");resetTable = true;},10000);	
}

function resetOddEvenColour(sector)
{
	var table   	 = document.getElementById(sector);		
	var length  	 = table.rows.length;
	var evenOrOddRow = "";

	for(var i=0;i<length;i++)
	{
		var remainder    = i%2;
		
		if(remainder == 0)
			evenOrOddRow = "odd";
		else
			evenOrOddRow = "even";

		table.rows[i].className = evenOrOddRow;
	}
}

// function resetOddEvenColourOBSOLETE(sector,symbol)
// {
// 	var table   = document.getElementById(sector);		
// 	var length  = table.rows.length;
// 	var evenOdd = "";
	
// 	var actualTableLen 	= length - 1; //need this because table headers are counted as well
// 	//alert(document.getElementById(symbol).innerHTML);
// 	var symbolIndex 	= table.rows.namedItem(symbol).rowIndex;

// 	if((symbolIndex + 1) < actualTableLen) //if it's the last row already, don't bother with reseting row colours
// 	{
// 		var startRowIndex = table.rows.namedItem(symbol).rowIndex + 1;
	
// 		//only loop through the remaining 
// 		for(var i=startRowIndex;i<length;i++)
// 		{
// 			var remainder = i%2;
// 			if(remainder == 0)
// 				evenOdd = "odd";
// 			else
// 				evenOdd = "even";
			
// 			var $curRow = $(table.rows[i])
	
	
// 			if ($curRow.hasClass("odd"))//the rows already have odd/row class value, so replace accordingly
// 				table.rows[i].className = modifyClassName(table.rows[i].className,"odd",evenOdd);
// 			else 
// 				table.rows[i].className = modifyClassName(table.rows[i].className,"even",evenOdd);
						
// 			//counter++;	
// 		}
// 	}
// }

/*SYNOPSIS - Utility function for switching class attributes*/
function modifyClassName(className,from,to)
{
	return className.replace(from,to);
}


function _expireInstrument(symbol,side)
{
	var row = document.getElementById(symbol);
	//row.className = "expired";
	if(side == "bid")
	{
		row.children[symbol+"TIMBID"].className = "time expired";
		row.children[symbol+"BRKBID"].className = "brokers expired";
		row.children[symbol+"HTBID"].className = "trades expired";
		row.children[symbol+"SZBID"].className = "size expired";
		row.children[symbol+"BID"].className = "bid expired";

		//only expire the ticker column if both bid/ask are expired
		//if(row.children[symbol+"ASK"].className .search("expired") != -1)
		//	row.children[symbol+"NME"].className += " expired";		
	}
	else if(side == "ask")
	{
		row.children[symbol+"TIMASK"].className = "time expired";
		row.children[symbol+"BRKASK"].className = "brokers expired";
		row.children[symbol+"TKASK"].className = "trades expired";
		row.children[symbol+"SZASK"].className = "size expired";
		row.children[symbol+"ASK"].className = "ask expired";

		//only expire the ticker column if both bid/ask are expired
		//if(row.children[symbol+"BID"].className .search("expired") != -1)
		//	row.children[symbol+"NME"].className += " expired";		

	}
	
	
	// var img = row.firstChild.firstChild;
	// img.className = "noimage";
	// img.setAttribute("src","blank.png");
}

// function _unExpireInstrument(symbol,side)
// {
// 	var row = document.getElementById(symbol);
// 	//row.className = "expired";
// 	if(side == "bid")
// 	{
// 		row.children[symbol+"TIMBID"].className = row.children[symbol+"TIMBID"].className.replace("expired", "");
// 		row.children[symbol+"BRKBID"].className = row.children[symbol+"BRKBID"].className.replace("expired", ""); 
// 		row.children[symbol+"HTBID"].className 	= row.children[symbol+"HTBID"].className.replace("expired", "");
// 		row.children[symbol+"SZBID"].className 	= row.children[symbol+"SZBID"].className.replace("expired", "");
// 		row.children[symbol+"BID"].className 	= row.children[symbol+"BID"].className.replace("expired", "");

// 		//only expire the ticker column if both bid/ask are expired
// 		if(row.children[symbol+"ASK"].className .search("expired") != -1)
// 			row.children[symbol+"NME"].className = row.children[symbol+"NME"].className.replace("expired", "");		
// 	}
// 	else if(side == "ask")
// 	{
// 		row.children[symbol+"TIMASK"].className = row.children[symbol+"TIMASK"].className.replace("expired", "");
// 		row.children[symbol+"BRKASK"].className = row.children[symbol+"BRKASK"].className.replace("expired", "");
// 		row.children[symbol+"TKASK"].className 	= row.children[symbol+"TKASK"].className .replace("expired", "");
// 		row.children[symbol+"SZASK"].className 	= row.children[symbol+"SZASK"].className.replace("expired", "");
// 		row.children[symbol+"ASK"].className 	= row.children[symbol+"ASK"].className.replace("expired", "");

// 		//only expire the ticker column if both bid/ask are expired
// 		if(row.children[symbol+"BID"].className .search("expired") != -1)
// 			row.children[symbol+"NME"].className = row.children[symbol+"NME"].className.replace("expired", "");		

// 	}
// }
// ------------------------- Add/Remove Bond End --------------------------------




function _setListLabel(pLabel)
{
	document.getElementById("listlabel").innerHTML = pLabel;
	document.getElementById("closetable").innerHTML = "filter";
}

function setHeaders()
{

	var fixedHeader = [];
	var j			= 0;
	fixedHeader[j++] = '<table class="fixedheader"><thead><tr>';
	fixedHeader[j++] =	'<th class="">Ticker</th>';
	fixedHeader[j++] =	'<th class="time">Time</th>';
	fixedHeader[j++] =	'<th class="brokers">C</th>';
	fixedHeader[j++] =	'<th class="">Trades</th>' ;
	fixedHeader[j++] =	'<th class="size">Size</th>' ;
	fixedHeader[j++] =	'<th class="bid">Bid</th>';
	fixedHeader[j++] =	'<th class="ask">Ask</th>';
	fixedHeader[j++] = 	'<th class="size">Size</th>';
	fixedHeader[j++] =	'<th class="">Trades</th>' ;
	fixedHeader[j++] = 	'<th class="brokers">C</th>';
	fixedHeader[j++] =	'<th class="time">Time</th>';
	fixedHeader[j++] =	'</tr></thead><col width=110><col width=25><col width=20><col width=25><col width=25><col width=30><col width=50><col width=50><col width=30><col width=25><col width=25><col width=25><col width=25></table>';

	document.getElementById("fixedheader").innerHTML = fixedHeader.join("");
}

function _destroyTable()
{
	document.getElementById("tablecontent").innerHTML = ""
	cache = {};
}

function _initialiseTable(country,symbols,stat1, stat2)
{

	setHeaders();

	var fullView  = []; 
	var i         = 0;
	fullView[i++] = '<table class="quotes" id="totalview">'; 	//[0]
	fullView[i++] = ""; 										//[1]
	fullView[i++] = "<tbody>";									//[2]
	fullView[i++] = "";											//[3]
	fullView[i++] = "</tbody>";									//[4]
	fullView[i++] = "</table>";									//[5]

	fullView[3]  = [];
	
	var tableHeader  = [];
	var j            = 0;

	tableHeader[j++] = '<thead><tr>';
	tableHeader[j++] =	'<th class="">'+ stat1 + '</th>';
	tableHeader[j++] =	'<th class="">'+ stat2 + '</th>';
	tableHeader[j++] =	'<th class=""></th>';
	tableHeader[j++] =	'<th class=""></th>';
	tableHeader[j++] =	'<th class=""></th>';
	tableHeader[j++] =	'<th class=""></th>';
	tableHeader[j++] =	'<th class=""></th>';
	tableHeader[j++] =	'<th class=""></th>';
	tableHeader[j++] = 	'<th class=""></th>';
	tableHeader[j++] = 	'<th class=""></th>';
	tableHeader[j++] = 	'<th class=""></th>';
	tableHeader[j++] =	'</tr></thead>';
	tableHeader[j++] = '<col width=110><col width=25><col width=20><col width=25><col width=25><col width=30><col width=50><col width=50><col width=30><col width=25><col width=25><col width=25><col width=25>';
	fullView[1] 	 = tableHeader.join("");

	var rowTemplate = [];
	var k 			= 0;
	rowTemplate[k++] = '<TR id="#isin" class="#oddEven" grouping="#issuer" depthRow="false">'; 	//[0]
	rowTemplate[k++] = '<TD class="name" id="#bbqnameid"><img class="noimage" src="blank.png"/><span class="clickname">#bbqName</span></TD>'; //[1] 						

	rowTemplate[k++] = '<TD class="time" 	id="#bbqTimeBid">&nbsp;</TD>'; 					   	//[2]

	rowTemplate[k++] = '<TD class="brokers" id="#bbqBbrkrs">&nbsp;</TD>'; 						//[3]
	rowTemplate[k++] = '<TD class="trades"  id="#bbqBTrade">&nbsp;</TD>'; 						//[4]
	rowTemplate[k++] = '<TD class="size"    id="#bbqBSize">&nbsp;</TD>'; 						//[5]
	rowTemplate[k++] = '<TD class="bid"     id="#bbqNameBid">&nbsp;</TD>'; 						//[6]
	rowTemplate[k++] = '<TD class="ask"     id="#bbqNameAsk">&nbsp;</TD>';						//[7]
	rowTemplate[k++] = '<TD class="size"    id="#bbqASize">&nbsp;</TD>'; 						//[8]
	rowTemplate[k++] = '<TD class="trades"  id="#bbqATrade">&nbsp;</TD>'; 						//[9]
	rowTemplate[k++] = '<TD class="brokers" id="#bbqAbrkrs">&nbsp;</TD>'; 						//[10]

	rowTemplate[k++] = '<TD class="time"  	id="#bbqTimeAsk">&nbsp;</TD></TR>'; 				//[11]

	var rowIndex   = 0; 
	var symbolList = symbols.split(";");
	var bondLength = symbolList.length;

	for (var j = 0; j < bondLength; j++) 
	{
		var evenOrOddRow = "";
		var remainder    = j%2;
		
		if(remainder == 0)
			evenOrOddRow = "even";
		else
			evenOrOddRow = "odd";

		var nameAndSymbol = symbolList[j].split("-");
		var symbol 	 = nameAndSymbol[0];
		var name   	 = nameAndSymbol[1];
		var grouping = nameAndSymbol[2];//get the group (aka "aggregate" or "issuer") the symbol belongs to
		var symType  = nameAndSymbol[3]

		//create a value-of copy and assign it to the current bond
		var aRow  = rowTemplate.slice(0);
		
		aRow[0] = aRow[0].replace('#isin',symbol);
		aRow[0] = aRow[0].replace('#oddEven',evenOrOddRow);
		aRow[0] = aRow[0].replace('#issuer',grouping);
		// aRow[0] = aRow[0].replace('#defaultBM',aBond.getAttribute("bm"));
		// aRow[0] = aRow[0].replace('#listOfBM',aBond.getAttribute("benchmarkTS"));
		
		aRow[1] = aRow[1].replace('#bbqName',name);
		aRow[1] = aRow[1].replace('#bbqnameid',symbol + "NME");

		
		if(symType == "1")
		{	
			aRow[1] = aRow[1].replace('blank','expand');
			aRow[1] = aRow[1].replace('noimage','depthplusminus');
		}
		
		aRow[2] = aRow[2].replace('#bbqTimeBid',symbol 	+ "TIMBID");

		aRow[3] = aRow[3].replace('#bbqBbrkrs',symbol 	+ "BRKBID");
		aRow[4] = aRow[4].replace('#bbqBTrade',symbol 	+ "HTBID");
		aRow[5] = aRow[5].replace('#bbqBSize',symbol 	+ "SZBID");
		aRow[6] = aRow[6].replace('#bbqNameBid', symbol + "BID");
		aRow[7] = aRow[7].replace('#bbqNameAsk',symbol  + "ASK");
		aRow[8] = aRow[8].replace('#bbqASize',symbol 	+ "SZASK");
		aRow[9] = aRow[9].replace('#bbqATrade',symbol 	+ "TKASK");
		aRow[10] = aRow[10].replace('#bbqAbrkrs',symbol 	+ "BRKASK");

		aRow[11] = aRow[11].replace('#bbqTimeAsk',symbol 	+ "TIMASK");
		
		fullView[3][rowIndex++] = aRow.join("");
	}			

	fullView[3]                                       = fullView[3].join("");	
	document.getElementById("tablecontent").innerHTML = fullView.join("");
	resetNanoWindowSize();    

}

/* Adds benchmark data to symbols in the html table.*/
function _updateBenchmarks(symbolBMs)
{//CLN2-5YUST-1MUST,3MUST,6MUST,1YUST,2YUST,3YUST,5YUST,7YUST,10YUST,30YUST
 //symbol-defaultbenchmark-list of benchmarks

	var symbolsAndBMs = symbolBMs.split(" ");

	for (var i=0;i<symbolsAndBMs.length;i++)	
	{
		var oneSymbolAndBM = symbolsAndBMs[i].split("-");
		var symbol         = oneSymbolAndBM[0];
		var defaultBM      = oneSymbolAndBM[1];
		var bmList         = oneSymbolAndBM[2];

		var tr = document.getElementById(symbol);
		tr.setAttribute("bm",defaultBM);
		tr.setAttribute("bmList",bmList);

	}
}




// ------------------------------- Floating Broker Pages START -----------------------------------
function createBrokerPage()
{
	var rowTemplate = [];
	var k 			= 0;
	rowTemplate[k++] = '<div id="brokerarrowtop" class="hideme"></div><div id="brokerarrowbottom" class="hideme"></div><table id="brokerpagetable" class="hideme">';
	rowTemplate[k++] = '<thead><tr><th id="brokerpagetitle">Raw Data </th><th id="tradesrawdatatoggle" class="bpvalset"></th></tr></thead><tbody>';
	rowTemplate[k++] = '<tr class="odd"><td colspan="2" id="BRKPG1"><pre>                                        </pre></td></tr>';
	rowTemplate[k++] = '<tr class="even"><td colspan="2" id="BRKPG2"><pre>                                        </pre></td></tr>';
	rowTemplate[k++] = '<tr class="odd"><td colspan="2" id="BRKPG3"><pre>                                        </pre></td></tr>';
	rowTemplate[k++] = '<tr class="even"><td colspan="2" id="BRKPG4"><pre>                                        </pre></td></tr>';
	rowTemplate[k++] = '<tr class="odd"><td colspan="2" id="BRKPG5"><pre>                                        </pre></td></tr>';
	rowTemplate[k++] = '<tr class="even"><td colspan="2" id="BRKPG6"><pre>                                        </pre></td></tr>';
	rowTemplate[k++] = '<tr class="odd"><td colspan="2" id="BRKPG7"><pre>                                        </pre></td></tr>';
	rowTemplate[k++] = '<tr class="even"><td colspan="2" id="BRKPG8"><pre>                                        </pre></td></tr>';
	rowTemplate[k++] = '<tr class="odd"><td colspan="2" id="BRKPG9"><pre>                                        </pre></td></tr>';
	rowTemplate[k++] = '<tr class="even"><td colspan="2" id="BRKPG10"><pre>                                        </pre></td></tr>';
	rowTemplate[k++] = '</tbody></table>';

	document.getElementById("brokerpage").innerHTML = rowTemplate.join("");
}

function _updateBrokerPageRow(val)
{
	var valtemp = val.split(";");
	document.getElementById(valtemp[0]).innerHTML = valtemp[1];
}
function _writeBrokerName(val)
{
	document.getElementById("brokerpagetitle").innerHTML = val;
}
function toggleBrokerPages(target)
{
	if(rawDataShowing == true)
	{
		document.getElementById("brokerpagetable").className = "hideme";
		document.getElementById("brokerarrowtop").className = "hideme";
		document.getElementById("brokerarrowbottom").className = "hideme";
		rawDataShowing = false;
		//refPricer.stopRawData();
		return;
	}
	createBrokerPage();
	hideRightClickMenuAndDepthTrades();

	//deactivate nanoscroller, otherwise trades/depth popup is scrollable
	$("#application .nano").nanoScroller({stop:true});
	handleNanoScrollerEventBug();

	document.getElementById("tradesrawdatatoggle").innerHTML = "";

	var $brokerpagetable = $(document.getElementById("brokerpagetable"));
	var $brokerarrowtop  = $(document.getElementById("brokerarrowtop"));
	var $brokerarrowbottom = $(document.getElementById("brokerarrowbottom"));

	//caculation that determines if the popup overlaps the bottom of the viewport
	$doc        	= $(document);
	$win        	= $(window);
	var brktableH 	= $brokerpagetable.outerHeight();
	var dTop    	= ($(target).offset().top - 25) - $doc.scrollTop();
	var dBottom 	= $win.height() - dTop -brktableH -30; /* take trades.height out of equation if moving back to side by side*/

	var $tarLocal 	=  $(target).offset();


	//refPricer.getRawDataFor(target.innerHTML,target.getAttribute("symid"), "start");
	//alert(target.innerHTML + " " + target.getAttribute("symid"));
	//_updateBrokerPageRow("BRKPG1;<pre>PDVSA   17N         / 88.50       x 2   </pre>");
	//_writeBrokerName("TRADITION");

	if (dBottom < 0 ) 
	{// paint it above
		
		if(target.parentNode.id.search("ASK") != -1)
		{//paint it close to the middle, relative to the ask

			$brokerpagetable[0].style.top = $(target).offset().top - brktableH - 5; //top of the mdtable should be pushed down
			$brokerpagetable[0].style.left = $(target).offset().left - 240;

			$brokerarrowbottom[0].style.top = $(target).offset().top-5; 
			$brokerarrowbottom[0].style.left = $(target).offset().left-3;
		}
		else
		{
			$brokerpagetable[0].style.top = $(target).offset().top - brktableH - 5; //top of the mdtable should be pushed down
			$brokerpagetable[0].style.left = $(target).offset().left - 30;

			$brokerarrowbottom[0].style.top = $(target).offset().top - 5; 
			$brokerarrowbottom[0].style.left = $(target).offset().left -3 ;
		}

		$brokerpagetable[0].className   = "show";
		$brokerarrowtop[0].className    = "hideme";
		$brokerarrowbottom[0].className = "show";
	}
	else
	{//paint it below


		if(target.parentNode.id.search("ASK") != -1)
		{//paint it close to the middle, relative to the ask
			
			$brokerpagetable[0].style.top = $(target).offset().top + 20; //top of the mdtable should be pushed down
			$brokerpagetable[0].style.left = $(target).offset().left - 240;

			$brokerarrowtop[0].style.top = $(target).offset().top+8; 
			$brokerarrowtop[0].style.left = $(target).offset().left-2;
			
		}
		else
		{
			$brokerpagetable[0].style.top = $(target).offset().top +20; //top of the mdtable should be pushed down
			$brokerpagetable[0].style.left = $(target).offset().left - 30;

			$brokerarrowtop[0].style.top = $(target).offset().top + 8; 
			$brokerarrowtop[0].style.left = $(target).offset().left-2;
		}
		$brokerpagetable[0].className   = "show";
		$brokerarrowbottom[0].className = "hideme";
		$brokerarrowtop[0].className    = "show";
	}
	
	var menucloser       = document.getElementById("menucloser");
	menucloser.className = "bringtofront";
	rawDataShowing       = true;
	
}
function toggleTradesIntoBrokerPages(target)
{ //deals with use case where depth/trades has appeared, and the user clicks on a broker code in the depth to see raw data for it

	createBrokerPage();
	document.getElementById("tradesrawdatatoggle").innerHTML = "&#108;";

	var $trades = $(document.getElementById("trades"));
	var $brokerpagetable = $(document.getElementById("brokerpagetable"));

	$trades[0].className = "hideme";
	document.getElementById("brokerarrowbottom").className = "hideme";
	document.getElementById("brokerarrowtop").className = "hideme";

	//refPricer.getRawDataFor(target.innerHTML,currentDepthTradesSymbol, "start");
	//alert(target.innerHTML + " " + currentDepthTradesSymbol);
	//_updateBrokerPageRow("BRKPG1;<pre>PDVSA   17N         / 88.50       x 2   </pre>");
	//_writeBrokerName("TRADITION");
	
	if (tradeOnTopOrBottom == "above")
	{
		
		$brokerpagetable[0].style.left = $trades[0].style.left;
		$brokerpagetable[0].style.top = parseFloat($trades[0].style.top) - 84;

	}
	else if(tradeOnTopOrBottom == "below")
	{
		$brokerpagetable.css(
		{
			left:$trades[0].style.left,
			top:$trades[0].style.top
		})
	}
	$brokerpagetable[0].className = "show";
	rawDataShowing = true;

}
function turnoffBrokerPages(target)
{
	document.getElementById("brokerpagetable").className = "hideme";
	document.getElementById("trades").className = "";
	rawDataShowing = true;
}
// ------------------------------- Floating Broker Pages START --------------------------------





// ------------------------------- Floating / Hover / Tooltip Depth and Trades START --------------------------------

function createDepthAndTrades()
{
	var DepthAndTrades = '<table id="trades" class="hideme"><thead><tr><th class="">Direction</th><th class="">Broker</th><th class="">Price</th><th class="">Size</th></tr></thead><tr class="odd"><td class="hittake" id="thittake1">&nbsp;</td><td class="broker" id="tbroker1">&nbsp;</td><td class="price" id="tprice1">&nbsp;</td><td class="size" id="tsize1">&nbsp;</td></tr><tr class="even"><td class="hittake" id="thittake2">&nbsp;</td><td class="broker" id="tbroker2">&nbsp;</td><td class="price" id="tprice2">&nbsp;</td><td class="size" id="tsize2">&nbsp;</td></tr><tr class="odd"><td class="hittake" id="thittake3">&nbsp;</td><td class="broker" id="tbroker3">&nbsp;</td><td class="price" id="tprice3">&nbsp;</td><td class="size" id="tsize3">&nbsp;</td></tr><tr class="even"><td class="hittake" id="thittake4">&nbsp;</td><td class="broker" id="tbroker4">&nbsp;</td><td class="price" id="tprice4">&nbsp;</td><td class="size" id="tsize4">&nbsp;</td></tr><tr class="odd"><td class="hittake" id="thittake5">&nbsp;</td><td class="broker" id="tbroker5">&nbsp;</td><td class="price" id="tprice5">&nbsp;</td><td class="size" id="tsize5">&nbsp;</td></tr><tr class="even"><td class="hittake" id="">&nbsp; </td><td class="broker" id="">&nbsp; </td><td class="price" id="">&nbsp; </td><td class="size" id="moretrades">more...</td></tr></table><table id="marketdepth" class="hideme"><div id="deptharrow"></div><thead><tr><th class="bbrokers">C</th><th class="bsize">Size</th><th class="bid">Bid</th><th class="ask">Ask</th><th class="asize">Size</th><th class="abrokers">C</th></tr></thead><tbody><TR class="odd"  attribution="#attribution"><TD class="bbrokers" id="BRKBID1">&nbsp;</TD><TD class="bsize" id="SZBID1">&nbsp;</TD><TD class="bid" id="PXBID1">&nbsp;</TD><TD class="ask" id="PXASK1">&nbsp;</TD><TD class="asize" id="SZASK1">&nbsp;</TD><TD class="abrokers" id="BRKASK1">&nbsp;</TD></TR><TR  class="even" attribution="#attribution"><TD class="bbrokers" id="BRKBID2">&nbsp;</TD><TD class="bsize" id="SZBID2">&nbsp;</TD><TD class="bid" id="PXBID2">&nbsp;</TD><TD class="ask" id="PXASK2">&nbsp;</TD><TD class="asize" id="SZASK2">&nbsp;</TD><TD class="abrokers" id="BRKASK2">&nbsp;</TD></TR><TR class="odd" attribution="#attribution"><TD class="bbrokers" id="BRKBID3">&nbsp;</TD><TD class="bsize" id="SZBID3">&nbsp;</TD><TD class="bid" id="PXBID3">&nbsp;</TD><TD class="ask" id="PXASK3">&nbsp;</TD><TD class="asize" id="SZASK3">&nbsp;</TD><TD class="abrokers" id="BRKASK3">&nbsp;</TD></TR><TR  class="even" attribution="#attribution"><TD class="bbrokers" id="BRKBID4">&nbsp;</TD><TD class="bsize" id="SZBID4">&nbsp;</TD><TD class="bid" id="PXBID4">&nbsp;</TD><TD class="ask" id="PXASK4">&nbsp;</TD><TD class="asize" id="SZASK4">&nbsp;</TD><TD class="abrokers" id="BRKASK4">&nbsp;</TD></TR><TR class="odd" attribution="#attribution"><TD class="bbrokers" id="BRKBID5">&nbsp;</TD><TD class="bsize" id="SZBID5">&nbsp;</TD><TD class="bid" id="PXBID5">&nbsp;</TD><TD class="ask" id="PXASK5">&nbsp;</TD><TD class="asize" id="SZASK5">&nbsp;</TD><TD class="abrokers" id="BRKASK5">&nbsp;</TD></TR><TR  class="even" attribution="#attribution"><TD class="bbrokers" id="BRKBID6">&nbsp;</TD><TD class="bsize" id="SZBID6">&nbsp;</TD><TD class="bid" id="PXBID6">&nbsp;</TD><TD class="ask" id="PXASK6">&nbsp;</TD><TD class="asize" id="SZASK6">&nbsp;</TD><TD class="abrokers" id="BRKASK6">&nbsp;</TD></TR></tody></table>';
	document.getElementById("depthandtrades").innerHTML = DepthAndTrades;
}

function toggleDepthAndTrades(target)
{
	
	if(rawDataShowing == true)
	{
		document.getElementById("brokerpagetable").className = "hideme";
		document.getElementById("brokerarrowtop").className = "hideme";
		document.getElementById("brokerarrowbottom").className = "hideme";
		rawDataShowing = false;
	}
	createDepthAndTrades();

	var $table = $(document.getElementById("marketdepth"));
	var $trades = $(document.getElementById("trades"));
	
	//caculation that determines if the popup overlaps the bottom of the viewport
	$doc        = $(document);
	$win        = $(window);
	var dTop    = ($(target).offset().top - 25) - $doc.scrollTop();
	var dBottom = $win.height() - dTop - $table.height() - $trades.height(); /* take trades.height out of equation if moving back to side by side*/

	if (dBottom < 0 ) 
	{//150 is the magic hieght of the popup (non-dynamic). There is overlap with the viewport, so paint it above
		tradeOnTopOrBottom = "above"; 
		$("#deptharrow").css("top",140);//move arrow to the bottom of the table, because of viewport obstruction
		$table[0].style.top = $(target).offset().top - 140; //top of the mdtable should be pushed down
		$table[0].style.left = $(target).offset().left + 100;

		//depth and trades side by side		
		// $trades[0].style.top = $(target).offset().top - 127; //top of the trades should be pushed down
		// $trades[0].style.left = $(target).offset().left + $trades.outerWidth() + 60;

		//stacked
		$trades[0].style.left = $(target).offset().left + 100;
		$trades[0].style.top = $(target).offset().top - $table.outerHeight() - 120;
	}
	else
	{
		tradeOnTopOrBottom = "below";
		$("#deptharrow").css("top",25); 
		$table[0].style.top = $(target).offset().top - 25; //align top of md table approx with the current selected row
		$table[0].style.left = $(target).offset().left +100;
		
		//depth and trades side by side
		// $trades[0].style.left = $(target).offset().left + $trades.outerWidth() + 60;
		// $trades[0].style.top = $(target).offset().top -13;

		//stacked
		$trades[0].style.left = $(target).offset().left + 100;
		$trades[0].style.top = $(target).offset().top + $table.outerHeight() - 20;

	}

	if(target.getAttribute("src") == "expand.png")
	{//show	

		//deactivate nanoscroller, otherwise trades/depth popup is scrollable
		$("#application .nano").nanoScroller({stop:true});
		handleNanoScrollerEventBug();
		
		//refPricer.GetDepthFor(target.parentNode.parentNode.id,"start");
		if(currentDepthTradesSymbol != undefined)
			document.getElementById(currentDepthTradesSymbol).childNodes[0].childNodes[0].setAttribute("src","expand.png")
		
		currentDepthTradesSymbol = target.parentNode.parentNode.id;
		currentDepthTradesSymbolName = target.parentNode.innerText;
		
		$table[0].className  = "show";
		$trades[0].className = "show";
		target.setAttribute("src","collapse.png");

		var menucloser = document.getElementById("menucloser");
		menucloser.className = "bringtofront";
	}
	else
	{//hide
		
		//refPricer.GetDepthFor(target.parentNode.parentNode.id,"stop");

		hideRightClickMenuAndDepthTrades();
	}
	
}
// ------------------------------- Floating / Hover / Tooltip Depth and Trades END --------------------------------





// ----------------- Right Click Menu START ------------------------------------
function createRightClickMenu(pbmlist,pdefaultbm,psymbol,pmylists)
{
	var sHtml     = ""
	if (pbmlist != null)
	{
		
		var bmList    = pbmlist.split(",");
		var bmListLen = bmList.length;
		
		for(var i=0;i<bmListLen;i++)
		{
			if(bmList[i]==pdefaultbm)
				sHtml = sHtml + '<tr><td class="label">'+ bmList[i] +'</td><td class="rightclick valset">&#108;</td></tr>'
			else 
				sHtml = sHtml + '<tr><td class="label">'+ bmList[i] +'</td><td class="rightclick valnot"ye>&#161;</td></tr>'
		}
	}


	//construct the mylist functionality
	var list1 = "";
	var list2 = "";
	var list3 = "";
	var list4 = "";
	var list5 = "";
	
	if (pmylists != null) 
	{
		var myLists    = pmylists.split(" ");
		var listLength = myLists.length;

		//ensure that mylists the bond is currently on, is actually shown as selected in the right click menu (via &#108; wingding font)
		for(var j=0;j<listLength;j++)
		{
			if(myLists[j] == "Portfolio1")
			{
				list1 = list1 + '<tr><td class="label">Portfolio 1</td><td class="mylist valset">&#108;</td></tr>';
			}
			if(myLists[j] == "Portfolio2")
			{
				list2 = list2 + '<tr><td class="label">Portfolio 2</td><td class="mylist valset">&#108;</td></tr>';
			}
			if(myLists[j] == "Portfolio3")
			{
				list3 = list3 + '<tr><td class="label">Portfolio 3</td><td class="mylist valset">&#108;</td></tr>';
			}
			if(myLists[j] == "Portfolio4")
			{
				list4 = list4 + '<tr><td class="label">Portfolio 4</td><td class="mylist valset">&#108;</td></tr>';
			}
			if(myLists[j] == "Portfolio5")
			{
				list5 = list5 + '<tr><td class="label last">Portfolio 5</td><td class="mylist valset last">&#108;</td></tr>';
			}
		}

	}

	//for the rest of the lists that the bond does NOT belong to, make them not selected via &#161;
	if(list1 =="")
	{
		list1 = list1 + '<tr><td class="label">Portfolio 1</td><td class="mylist valnot">&#161;</td></tr>';				
	}
	if(list2 =="")
	{
		list2 = list2 + '<tr><td class="label">Portfolio 2</td><td class="mylist valnot">&#161;</td></tr>';				
	}
	if(list3 =="")
	{
		list3 = list3 + '<tr ><td class="label">Portfolio 3</td><td class="mylist valnot">&#161;</td></tr>';				
	}
	if(list4 =="")
	{
		list4 = list4 + '<tr ><td class="label">Portfolio 4</td><td class="mylist valnot">&#161;</td></tr>';				
	}
	if(list5 =="")
	{
		list5 = list5 + '<tr ><td class="label last">Portfolio 5</td><td class="mylist valnot last">&#161;</td></tr>';				
	}

	sHtml = sHtml + list1 + list2 + list3 + list4 + list5;

	$("#rightclicktable").append(sHtml);//using jquery coz can't figure out how to append html text to a table in ie... doh

	//sets the bondid against which the menu was triggered inside the right click menu markup
	var table = document.getElementById("rightclicktable").setAttribute("bondID", psymbol);

	var menucloser = document.getElementById("menucloser");
	menucloser.className = "bringtofront";
}

function toggleMyList(target)
{
	if(target.className.search("mylist valnot") != -1)
	{//a list that was previously not selected, has been clicked on. So respond and enable the button and add to list. 

		target.innerHTML = '&#108;';
		if(target.className.search("last") == -1)//don't add a dotted border to the last menu item
			target.className = 'mylist valset';
		else
			target.className = 'mylist valset last';


		var symbol             = target.parentNode.parentNode.parentNode.getAttribute("bondID")
		var symbolMainTableRow = document.getElementById(symbol);
		var curLists		   = symbolMainTableRow.getAttribute("mylists");

		if (curLists == null)
		{
			//this regex is important because the mylist attribute must store mylist="Portfolio1" NOT mylist="Portfolio 1"
			var listval = $(target).siblings(".label").text().replace(/\s/g, "");
			symbolMainTableRow.setAttribute("mylists", listval);
			//alert("Call VBA function to add: "+ symbol + " to "+ listval)
		}
		else
		{//this regex is important because the mylist attribute must store mylist="Portfolio1" NOT mylist="Portfolio 1"
			var listval = curLists + $(target).siblings(".label").text().replace(/\s/g, "");
			symbolMainTableRow.setAttribute("mylists", listval);					
			//alert("Call VBA function to add: "+ symbol + " to "+ $(target).siblings(".label").text().replace(/\s/g, ""))
		}

	}
	else
	{// remove the bond from the selected list and update the persistance layer wth a vba call
		
		target.innerHTML = "&#161;";
		if(target.className.search("last") == -1)//don't add a dotted border to the last menu item
			target.className = 'mylist valnot';
		else
			target.className = 'mylist valnot last';


		var bondID 		 = target.parentNode.parentNode.parentNode.getAttribute("bondID");
		var bondSrc 	 = document.getElementById(bondID);
		var currentlists = bondSrc.getAttribute("mylists");//.split(" ");
		var removedLists = ""
		//this regex is important because the mylist attribute must store mylist="list1" NOT mylist="list 1"
		removedLists = currentlists.replace($(target).siblings(".label").text().replace(/\s/g, ""),"");
		
		//alert("Call VBA function to remove"+ bondID + " from "+ $(target).siblings(".label").text().replace(/\s/g, ""))
		bondSrc.setAttribute("mylists", removedLists);		
	}
	window.setTimeout("hideRightClickMenuAndDepthTrades()",100);
}

function toggleRightClickBenchMarks(target)
{
	var $rightclicktable = $("#rightclicktable");

	$rightclicktable.find(".rightclick").each(function(index)
	{ //do radio button functionality					
		$(this).html("&#161;");	
		$(this).attr("class", "rightclick valnot");
	});

	
	target.innerHTML = '&#108;';
	target.className = 'rightclick valset';


	//get the bondid that triggered the right click menu to begin with. It's currently embedded in the #settingsTable markup
	var bondID = $rightclicktable.attr("bondID");
	//get the actual bond that matches the id
	var bondSrc = document.getElementById(bondID);
	//then update it's benchmark value for persistence
	bondSrc.setAttribute("BM",$(target).siblings(".label").text() );
	//alert("Call VBA Function to change benchmark for :" + bondID + " to:"+  $(target).siblings(".label").text());

	hideRightClickMenuAndDepthTrades();
}

function showRightClickMenu(target)
{
	hideRightClickMenuAndDepthTrades();
	$("#application .nano").nanoScroller({stop:true});
	handleNanoScrollerEventBug();

	var bmList                = target.getAttribute("bmList");
	var defaultBM             = target.getAttribute("bm");
	var bondBeingRightClicked = target.getAttribute("id");
	var myLists               = target.getAttribute("myLists");

	createRightClickMenu(bmList,defaultBM,bondBeingRightClicked,myLists);

	//caculation that determines if the popup overlaps the bottom of the viewport
	$rightclickmenu = $("#rightclickmenu")
	$doc        = $(document);
	$win        = $(window);
	$target     = $(target);
	rcmOffset   = $target.offset();
	var dTop    = rcmOffset.top - $doc.scrollTop();
	var dBottom = $win.height() - dTop - $target.height();
	var finalTop 	= 0;
	
	if (dBottom <  $rightclickmenu.height()) 
		finalTop = event.clientY - $rightclickmenu.height(); 
	else
		finalTop = event.clientY;

	$rightclickmenu.css(
	{
		top:finalTop+'px',
    	left: event.clientX+'px'
	}).show();							

}
function hideRightClickMenuAndDepthTrades()
{//hides both right click menu and depth/trades table. 

	
	if(currentDepthTradesSymbol != undefined)
	{//only hide if there's actually a current symbol for which depth/trades is shown
		var $table = $(document.getElementById("marketdepth"));
		var $trades = $(document.getElementById("trades"));

		$table[0].className = "hideme";
		$trades[0].className = "hideme";
		document.getElementById(currentDepthTradesSymbol).childNodes[0].childNodes[0].setAttribute("src","expand.png")
		document.getElementById("depthandtrades").innerHTML = "";
		currentDepthTradesSymbol = undefined;
	}
	if(rawDataShowing == true)
	{
		document.getElementById("brokerpagetable").className = "hideme";
		document.getElementById("brokerarrowtop").className = "hideme";
		document.getElementById("brokerarrowbottom").className = "hideme";
		rawDataShowing = false;
		//refPricer.stopRawData();
	}

	$('#rightclickmenu').hide();
	$("#rightclicktable").empty();

	var menucloser = document.getElementById("menucloser");
	menucloser.className = "sendtoback";

	//reset nanoscroller by bringing back to front for highlighting and resetting
	$("#application .nano").css("z-index","auto");
	$("#application .nano").nanoScroller();
}
// ----------------- Right Click Menu END  ------------------------------------













// ----------------- Data Update START  ------------------------------------

function _tradesAvailable(symbol)
{
	var img = document.getElementById(symbol).getElementsByTagName("img")[0];
	img.className = "depthplusminus";
	img.setAttribute("src","expand.png");
}

//CLZ0BID,80.47 CLZ0ASK,84.79
//bid = "CLZ0BID;80.47";
//ask = "CLZ0ASK;84.79";
	
function _dataUpdate(px, size, brk, trades, time)
{//the use of bid in the variables is legacy. This function will update either bid or ask, depending on the parameters. 

	var localCache 		= cache; 

	var bidpx = px.split(";");
	
	if(!localCache[bidpx[0]])
		localCache[bidpx[0]] = document.getElementById(bidpx[0]);

	localCache[bidpx[0]].innerHTML = bidpx[1];


	var bidbrokers = brk.split(";");

	if(!localCache[bidbrokers[0]])
		localCache[bidbrokers[0]] = document.getElementById(bidbrokers[0]);

	//clickable broker codes
	var brklen  = bidbrokers[1].length;
	var brkcdes = bidbrokers[1];
	var brkhtml = '<span symid="#id" class="brkclick">#brk</span>';
	var brkouput ="";
	for(var i=0;i<brklen;i++)
	{
		//parse out the symbold id and place into the dom for retrieval later when the user request the raw broker pages
		brkouput = brkouput + brkhtml.replace("#brk", brkcdes[i]).replace("#id", bidbrokers[0].substring(0,9));;
	}

	localCache[bidbrokers[0]].innerHTML = brkouput;

	var bidsizey = size.split(";");

	if(!localCache[bidsizey[0]])
		localCache[bidsizey[0]] = document.getElementById(bidsizey[0]);

	localCache[bidsizey[0]].innerHTML = bidsizey[1];

	var tradesy = trades.split(";")

	if(!localCache[tradesy[0]])
		localCache[tradesy[0]] = document.getElementById(tradesy[0]);

	localCache[tradesy[0]].innerHTML = tradesy[1];

	var timey = time.split(";")
	if(!localCache[timey[0]])
		localCache[timey[0]] = document.getElementById(timey[0]);

	localCache[timey[0]].innerHTML = timey[1];

	if(localCache[bidpx[0]].className.substring(0,3) == "ask")
	{
		localCache[bidpx[0]].className 		= "ask flash";
		localCache[bidsizey[0]].className 	= "size flash";
		localCache[bidbrokers[0]].className = "brokers flash";
		localCache[tradesy[0]].className 	= "trades flash";
		localCache[timey[0]].className 		= "time flash";
		window.setTimeout(function()
		{

			if(localCache[bidpx[0]].className.search("expired") == -1 )
			{
				localCache[bidpx[0]].className 		="ask";
				localCache[bidsizey[0]].className 	="size";
				localCache[bidbrokers[0]].className ="brokers";
				localCache[tradesy[0]].className 	="trades";
				localCache[timey[0]].className 		="time";
			}

		}, 5000)
	}
	else
	{
		localCache[bidpx[0]].className = "bid flash"
		localCache[bidsizey[0]].className 	= "size flash";
		localCache[bidbrokers[0]].className = "brokers flash";
		localCache[tradesy[0]].className 	= "trades flash";
		localCache[timey[0]].className 		= "time flash";
		window.setTimeout(function()
		{
			if(localCache[bidpx[0]].className.search("expired") == -1 )
			{
				localCache[bidpx[0]].className="bid";
				localCache[bidsizey[0]].className 	="size";
				localCache[bidbrokers[0]].className ="brokers";
				localCache[tradesy[0]].className 	="trades";
				localCache[timey[0]].className 		="time";
			}
		}, 5000)		
	}




}

/*
// Old data update functions that tweak with performanc and flashing updates etc. 
function _dataUpdateNOFLASHING(px, size, brk, trades)
{

	var localCache 		= cache; 
	var bidpx = px.split(";");
	
	if(!localCache[bidpx[0]])
		localCache[bidpx[0]] = document.getElementById(bidpx[0]);

	localCache[bidpx[0]].innerHTML = bidpx[1];


	var bidbrokers = brk.split(";");

	if(!localCache[bidbrokers[0]])
		localCache[bidbrokers[0]] = document.getElementById(bidbrokers[0]);

	localCache[bidbrokers[0]].innerHTML = bidbrokers[1];



	var bidsizey = size.split(";");

	if(!localCache[bidsizey[0]])
		localCache[bidsizey[0]] = document.getElementById(bidsizey[0]);

	localCache[bidsizey[0]].innerHTML = bidsizey[1];

	var tradesy = trades.split(";")

	if(!localCache[tradesy[0]])
		localCache[tradesy[0]] = document.getElementById(tradesy[0]);

	localCache[tradesy[0]].innerHTML = tradesy[1];

}

function _dataUpdateWITHFLASHING_AND_TIMERCLEARING(px, size, brk, trades)
{
	var localCache 		= cache; 

	var bidpx = px.split(";");

	//Add a single timer together with the bid price element as an object in the cache
	if(!localCache[bidpx[0]])
	{
		var updateAndTimer 	 = new Object();
		updateAndTimer.domEl = document.getElementById(bidpx[0]);
		updateAndTimer.timer = 0; //create a variable to hold timer reference

		localCache[bidpx[0]] = updateAndTimer;
	}
	else
	{//exists in the cache
		window.clearTimeout(localCache[bidpx[0]].timer);
	}

	localCache[bidpx[0]].domEl.innerHTML = bidpx[1];

	

	var bidbrokers = brk.split(";");

	if(!localCache[bidbrokers[0]])
		localCache[bidbrokers[0]] = document.getElementById(bidbrokers[0]);

	localCache[bidbrokers[0]].innerHTML = bidbrokers[1];


	var bidsizey = size.split(";");

	if(!localCache[bidsizey[0]])
		localCache[bidsizey[0]] = document.getElementById(bidsizey[0]);

	localCache[bidsizey[0]].innerHTML = bidsizey[1];

	
	var tradesy = trades.split(";")

	if(!localCache[tradesy[0]])
		localCache[tradesy[0]] = document.getElementById(tradesy[0]);

	localCache[tradesy[0]].innerHTML = tradesy[1];



	if(localCache[bidpx[0]].domEl.className.substring(0,3) == "ask")
	{
		localCache[bidpx[0]].domEl.className 		= "ask flash";
	 	localCache[bidsizey[0]].className 	= "size flash";
	 	localCache[bidbrokers[0]].className = "brokers flash";
	 	localCache[tradesy[0]].className 	= "trades flash";

		localCache[bidpx[0]].timer = window.setTimeout(function()
		{
			localCache[bidpx[0]].domEl.className 		="ask";
	 		localCache[bidsizey[0]].className 	="size";
	 		localCache[bidbrokers[0]].className 	="brokers";
	 		localCache[tradesy[0]].className 		="trades";
		}, 5000)
	}
	else
	{
		localCache[bidpx[0]].domEl.className = "bid flash"
		localCache[bidsizey[0]].className 	= "size flash";
		localCache[bidbrokers[0]].className = "brokers flash";
		localCache[tradesy[0]].className 	= "trades flash";

		localCache[bidpx[0]].timer = window.setTimeout(function()
		{
			localCache[bidpx[0]].domEl.className="bid";
			localCache[bidsizey[0]].className 	="size";
			localCache[bidbrokers[0]].className ="brokers";
			localCache[tradesy[0]].className 	="trades";
		}, 5000)		
	}

}
*/

function _tradesUpdate(action,brkr,px,size)
{
	var act = action.split(";")
	var ppx = px.split(";");
	var psize = size.split(";");
	var pbrkr = brkr.split(";");

	document.getElementById(act[0]).innerHTML = act[1];
	document.getElementById(ppx[0]).innerHTML = ppx[1];
	document.getElementById(psize[0]).innerHTML = psize[1];
	document.getElementById(pbrkr[0]).innerHTML = pbrkr[1];
}

//px = PXBID1;45.6 
//bsz1 = SZBID1;2
//bbrk1 = BRKBID1;GF
function _depthUpdate(px,size,brkr)
{
	var ppx = px.split(";");
	var psize = size.split(";");
	var pbrkr = brkr.split(";");

	document.getElementById(ppx[0]).innerHTML = ppx[1];
	document.getElementById(psize[0]).innerHTML = psize[1];
	document.getElementById(pbrkr[0]).innerHTML = pbrkr[1];
}


// ----------------- Data Update START  ------------------------------------
