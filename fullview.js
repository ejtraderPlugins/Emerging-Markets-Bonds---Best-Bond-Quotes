//---------------------------------------------------------------------------------------------------------------------------------------------------
var crude = "CLN2 CLQ2 CLU2 CLV2 CLX2 CLZ2 CLF3 CLG3 CLH3 CLJ3 CLK3 CLM3 CLN3 CLQ3 CLU3 CLV3 CLX3 CLZ3 CLF4 CLG4 CLH4 CLJ4 CLK4 CLM4 CLN4 CLQ4 CLU4 CLV4 CLX4 CLZ4 CLF5 CLG5 CLH5 CLJ5 CLK5 CLM5 CLN5 CLQ5 CLU5 CLV5 CLX5 CLZ5 CLF6 CLG6 CLH6 CLJ6 CLK6 CLM6 CLN6 CLQ6 CLU6 CLV6 CLX6 CLZ6 CLF7 CLG7 CLH7 CLJ7 CLK7 CLM7 CLN7 CLQ7 CLU7 CLV7 CLX7 CLZ7 CLM8 CLZ8 CLM9 CLZ9 CLM0 CLZ0";
var crudeAndNames = "CLN2-CLc1;CLQ2-CLc2;CLU2-CLc3;CLV2-CLc4;CLX2-CLc5;CLZ2-CLc6;CLF3-CLc7;CLG3-CLc8;CLH3-CLc9;CLJ3-CLc10;CLK3-CLc11;CLM3-CLc12;CLN3-CLc13;CLQ3-CLc14;CLU3-CLc15;CLV3-CLc16;CLX3-CLc17;CLZ3-CLc18;CLF4-CLc19;CLG4-CLc20;CLH4-CLc21;CLJ4-CLc22;CLK4-CLc23;CLM4-CLc24;CLN4-CLc25;CLQ4-CLc26;CLU4-CLc27;CLV4-CLc28;CLX4-CLc29;CLZ4-CLc30;CLF5-CLc31;CLG5-CLc32;CLH5-CLc33;CLJ5-CLc34;CLK5-CLc35;CLM5-CLc36;CLN5-CLc37;CLQ5-CLc38;CLU5-CLc39;CLV5-CLc40;CLX5-CLc41;CLZ5-CLc42;CLF6-CLc43;CLG6-CLc44;CLH6-CLc45;CLJ6-CLc46;CLK6-CLc47;CLM6-CLc48;CLN6-CLc49;CLQ6-CLc50;CLU6-CLc51;CLV6-CLc52;CLX6-CLc53;CLZ6-CLc54;CLF7-CLc55;CLG7-CLc56;CLH7-CLc57;CLJ7-CLc58;CLK7-CLc59;CLM7-CLc60;CLN7-CLc61;CLQ7-CLc62;CLU7-CLc63;CLV7-CLc64;CLX7-CLc65;CLZ7-CLc66;CLM8-CLc67;CLZ8-CLc68;CLM9-CLc69;CLZ9-CLc70;CLM0-CLc71;CLZ0-CLc72"
var crudeAndNamesAndAggregate = "CLN2-CLc1-AGG1;CLQ2-CLc2-AGG1;CLU2-CLc3-AGG1;CLV2-CLc4-AGG1;CLX2-CLc5-AGG1;CLZ2-CLc6-AGG1;CLF3-CLc7-AGG2;CLG3-CLc8-AGG2;CLH3-CLc9-AGG2;CLJ3-CLc10-AGG3;CLK3-CLc11-AGG3;CLM3-CLc12-AGG3;CLN3-CLc13-AGG3;CLQ3-CLc14-AGG3;CLU3-CLc15-AGG3;CLV3-CLc16-AGG3;CLX3-CLc17-AGG3;CLZ3-CLc18-AGG3;CLF4-CLc19-AGG3;CLG4-CLc20;CLH4-CLc21-AGG4;CLJ4-CLc22-AGG4;CLK4-CLc23-AGG4;CLM4-CLc24-AGG4;CLN4-CLc25-AGG4;CLQ4-CLc26-AGG4;CLU4-CLc27-AGG4;CLV4-CLc28-AGG4;CLX4-CLc29;CLZ4-CLc30-AGG5;CLF5-CLc31-AGG5;CLG5-CLc32-AGG5;CLH5-CLc33-AGG5;CLJ5-CLc34-AGG5;CLK5-CLc35;CLM5-CLc36-AGG6;CLN5-CLc37-AGG6;CLQ5-CLc38-AGG6;CLU5-CLc39-AGG6;CLV5-CLc40-AGG6;CLX5-CLc41-AGG6;CLZ5-CLc42-AGG6;CLF6-CLc43-AGG6;CLG6-CLc44-AGG6;CLH6-CLc45-AGG6;CLJ6-CLc46-AGG6;CLK6-CLc47-AGG6;CLM6-CLc48-AGG6;CLN6-CLc49-AGG6;CLQ6-CLc50-AGG6;CLU6-CLc51-AGG6;CLV6-CLc52-AGG6;CLX6-CLc53-AGG6;CLZ6-CLc54-AGG6;CLF7-CLc55-AGG6;CLG7-CLc56-AGG6;CLH7-CLc57-AGG6;CLJ7-CLc58-AGG6;CLK7-CLc59-AGG6;CLM7-CLc60-AGG6;CLN7-CLc61-AGG6;CLQ7-CLc62-AGG6;CLU7-CLc63-AGG6;CLV7-CLc64-AGG6;CLX7-CLc65-AGG6;CLZ7-CLc66-AGG6;CLM8-CLc67-AGG6;CLZ8-CLc68-AGG6;CLM9-CLc69-AGG6;CLZ9-CLc70-AGG6;CLM0-CLc71-AGG6;CLZ0-CLc72-AGG6"
var crudeAndNamesAndAggregateAndDepth = "CLN2-CLc1-AGG1-1;CLQ2-CLc2-AGG1-1;CLU2-CLc3-AGG1-2;CLV2-CLc4-AGG1-2;CLX2-CLc5-AGG1-2;CLZ2-CLc6-AGG1-1;CLF3-CLc7-AGG2-2;CLG3-CLc8-AGG2-2;CLH3-CLc9-AGG2-2;CLJ3-CLc10-AGG3-2;CLK3-CLc11-AGG3-1;CLM3-CLc12-AGG3-2;CLN3-CLc13-AGG3-2;CLQ3-CLc14-AGG3-2;CLU3-CLc15-AGG3-2;CLV3-CLc16-AGG3-1;CLX3-CLc17-AGG3-2;CLZ3-CLc18-AGG3-2;CLF4-CLc19-AGG3-2;CLG4-CLc20-2;CLH4-CLc21-AGG4-1;CLJ4-CLc22-AGG4-2;CLK4-CLc23-AGG4-2;CLM4-CLc24-AGG4-2;CLN4-CLc25-AGG4-2;CLQ4-CLc26-AGG4-1;CLU4-CLc27-AGG4-2;CLV4-CLc28-AGG4-2;CLX4-CLc29-2;CLZ4-CLc30-AGG5-2;CLF5-CLc31-AGG5-1;CLG5-CLc32-AGG5-2;CLH5-CLc33-AGG5-2;CLJ5-CLc34-AGG5-2;CLK5-CLc35-2;CLM5-CLc36-AGG6-1;CLN5-CLc37-AGG6-2;CLQ5-CLc38-AGG6-2;CLU5-CLc39-AGG6-2;CLV5-CLc40-AGG6-2;CLX5-CLc41-AGG6-1;CLZ5-CLc42-AGG6-2;CLF6-CLc43-AGG6-2;CLG6-CLc44-AGG6-2;CLH6-CLc45-AGG6-2;CLJ6-CLc46-AGG6-1;CLK6-CLc47-AGG6-2;CLM6-CLc48-AGG6-2;CLN6-CLc49-AGG6-2;CLQ6-CLc50-AGG6-2;CLU6-CLc51-AGG6-1;CLV6-CLc52-AGG6-2;CLX6-CLc53-AGG6-2;CLZ6-CLc54-AGG6-2;CLF7-CLc55-AGG6-2;CLG7-CLc56-AGG6-1;CLH7-CLc57-AGG6-2;CLJ7-CLc58-AGG6-2;CLK7-CLc59-AGG6-2;CLM7-CLc60-AGG6-2;CLN7-CLc61-AGG6-1;CLQ7-CLc62-AGG6-2;CLU7-CLc63-AGG6-2;CLV7-CLc64-AGG6-2;CLX7-CLc65-AGG6-2;CLZ7-CLc66-AGG6-1;CLM8-CLc67-AGG6-2;CLZ8-CLc68-AGG6-2;CLM9-CLc69-AGG6-2;CLZ9-CLc70-AGG6-2;CLM0-CLc71-AGG6-1;CLZ0-CLc72-AGG6-2";
var DowJones = "AA.N DIS.N KFT.OQ PG.N AXP.N GE.N KO.N T.N BA.N HD.N MCD.N TRV.N BAC.N HPQ.N MMM.N UTX.N CAT.N IBM.N MRK.N VZ.N CSCO.OQ INTC.OQ MSFT.OQ WMT.N CVX.N JNJ.N PFE.N XOM.N DD.N JPM.N";
var DowJoneAndNamesAndAggregateAndDepth = "KFTOQ-KFRAFTFoods-AGG1-2;AAN-Alcoa-AGG1-1;DISN-Disney-AGG1-1;PGN-Proctor Gamble-AGG2-2;AXPN-Axa Partners-AGG3-1";
var EuroDollar   = "EDN2 EDQ2 EDU2 EDV2 EDX2 EDZ2 EDH3 EDM3 EDU3 EDZ3 EDH4 EDM4 EDU4 EDZ4 EDH5 EDM5 EDU5 EDZ5 EDH6 EDM6 EDU6 EDZ6 EDH7 EDM7 EDU7 EDZ7 EDH8 EDM8 EDU8 EDZ8 EDH9 EDM9 EDU9 EDZ9 EDH0 EDM0 EDU0 EDZ0 EDH1 EDM1 EDU1 EDZ1 EDH2 EDM2";

var crudeBenchmarks = "CLN2-5YUST-1MUST,3MUST,6MUST,1YUST,2YUST,3YUST,5YUST,7YUST,10YUST,30YUST CLQ2-5YUST-1MUST,3MUST,6MUST,1YUST,2YUST,3YUST,5YUST,7YUST,10YUST,30YUST";

var actualBBQSymbols = "553191248-BABC 7.875 20$-BABC-1;595191144-BANBRA   23-BBRA-2;555728560-BANBRA 5.87523-BBRA-2;553191456-BBMG 6.500 14$-BBMG-1;553192080-BBMG 8.000 18$-BBMG-1;553192496-BBMG 8.875 20$-BBMG-1;553191664-BBMG 9.150 16$-BBMG-1;553191872-BBMG 9.625 17$-BBMG-1;553192288-BBMG 9.950 19$-BBMG-1;553195824-BBRA 3.875 17$-BBRA-1;553195408-BBRA 4.500 15$-BBRA-1;553196864-BBRA 5.375 21$-BBRA-1;553196032-BBRA 5.875 22$-BBRA-1;553197488-BBRA 6.000 20$-BBRA-1;553195200-BBRA 8.500 14$-BBRA-1;553198320-BBRA 8.500 XX$-BBRA-1;553198112-BBRA 9.250 XX$-BBRA-1;553204144-BDES 5.500 20$-BDES-1;553203728-BDES 6.369 18$-BDES-1;553203936-BDES 6.500 19$-BDES-1;553203104-BESI 5.625 15$-BESI-1;553202064-BGRA 7.375 22$-BGRA-1;553197696-BICB 5.250 15$-BICB-1;553197904-BICB 6.250 13$-BICB-1;553196656-BICB 8.500 20$-BICB-1;553198944-BPAN 8.500 20$-BPAN-1;553210384-BR 10.125 27$-BR-1;553207056-BR 10.250 13$-BR-1;553207264-BR 10.500 14$-BR-1;553209344-BR 4.875 21$-BR-1;553211632-BR 5.625 41$-BR-1;553208720-BR 5.875 19$-BR-1;553208096-BR 6.000 17$-BR-1//;553211216-BR 7.125 37$-BR-1;553207472-BR 7.375 15E-BR-1;553211008-BR 8.250 34$-BR-1;553206848-BR 8.500 12E-BR-1;553210176-BR 8.750 25$-BR-1;553193328-BRAD 2.566 14$-BRAD-1;553192704-BRAD 3.125 13$-BRAD-1;553193536-BRAD 4.100 15$-BRAD-1;553193744-BRAD 4.500 17$-BRAD-1;553194368-BRAD 5.750 22$-BRAD-1;553194160-BRAD 5.900 21$-BRAD-1;553193952-BRAD 6.750 19$-BRAD-1;598057424-BRADES 13-BR-2;598062680-BRADES 19-BR-2;555730312-BRADES6.75 19-BR-2;595132744-BRASKM   22-BR-2;592886240-BRAZIL 5Y-BR-2;553206016-BRSK 5.750 21$-BRSK-1;553205808-BRSK 7.000 20$-BRSK-1;553206432-BRSK 7.125 41$-BRSK-1;553205600-BRSK 7.250 18$-BRSK-1;553199360-BSAF 3.500 14$-BSAF-1;553200192-BSAF 6.750 21$-BSAF-1;553201024-BVOR 4.250 13$-BVOR-1;553201440-BVOR 5.250 16$-BVOR-1;553201856-BVOR 7.375 20$-BVOR-1;553194784-CRUZ 8.250 16$-CRUZ-1;553194576-CRUZ 8.500 15$-CRUZ-1;553194992-CRUZ 8.875 20$-CRUZ-1;455592720-CSNA 10.000 15$-CSNA-1;455592304-CSNA 6.500 20$-CSNA-1;455592512-CSNA 6.875 19$-CSNA-1;455592096-CSNA 7.000 XX$-CSNA-1;455592928-CSNA 9.750 13$-CSNA-1;455596672-CVRD 4.375 22$-CVRD-1;455597088-CVRD 6.875 36$-CVRD-1;455597296-CVRD 6.875 39$-CVRD-1;456246848-EMBRA      22-BR-2;553217872-GERD 5.750 21$-GERD-1;553217664-GERD 7.000 20$-GERD-1;553217456-GERD 7.250 17$-GERD-1;553218288-GLBO 4.875 22$-GLBO-1;553220784-ITAU 5.650 22$-ITAU-1;553220368-ITAU 5.750 21$-ITAU-1;553220160-ITAU 6.200 20$-ITAU-1;553220576-ITAU 6.200 21$-ITAU-1;455585648-MNRV 10.875 19$-MNRV-1;455586064-NETB 7.500 20$-NETB-1;553197280-NORB 3.625 15$-NORB-1;553197072-NORB 4.375 19$-NORB-1;555701112-ODBR       23-ODBR-2;455586272-ODBR 12.375 17$-ODBR-1;455586896-ODBR 6.000 23$-ODBR-1;455586688-ODBR 7.000 20$-ODBR-1;555698776-ODBR 7.5   17-ODBR-2;455587104-ODBR 7.500 XX$-ODBR-1;455587520-OGXP 8.375 22$-OGXP-1;473634608-PETBRA 14-BR-2;473635192-PETBRA 15-BR-2;555708120-PETBRA2.87515-BR-2;555716296-PETBRA5.75 20-BR-2;555715128-PETBRA7.87519-BR-2;455588560-PETR 3.500 17$-PETR-1;455588144-PETR 3.875 16$-PETR-1;455588976-PETR 4.875 18E-PETR-1;455589808-PETR 5.375 21$-PETR-1;455589600-PETR 5.750 20$-PETR-1;455588768-PETR 5.875 18$-PETR-1;455588352-PETR 6.125 16$-PETR-1;455590848-PETR 6.750 41$-PETR-1;455590432-PETR 6.875 40$-PETR-1;455589184-PETR 8.375 18$-PETR-1;455591264-QGOG 5.250 18$-QGOG-1;553200608-SANB 4.250 16$-SANB-1;553213920-SCHN 5.875 23$-SCHN-1;455594592-TLMP 5.500 20$-TLMP-1;455594800-TLMP 5.750 22$-TLMP-1";
var actualBBQSymbols2 = "CL98-BBRA 8.500 XX$-AGG1-1;270498872-BBRA 9.250 XX$-BBRA-1;270496792-BBRA 8.500 14$-BBRA-1;270497000-BBRA 4.500 15$-BBRA-1;270497416-BBRA 3.875 17$-BBRA-1;270499496-BBRA 6.000 20$-BBRA-1;270499080-BBRA 5.375 21$-BBRA-1;270498248-BBRA 5.875 22$-BBRA-1;272062296-EMBRA      17-BR-2;402523624-BRADES6.75 19-BR-2;410779136-BRAZIL 1Y-BR-2;270508856-BR 10.500 14$-BR-1;270509272-BR 7.875 15$-BR-1;270509480-BR 12.500 16 BRL-BR-1;270510312-BR 5.875 19$-BR-1;270510520-BR 8.875 19$-BR-1;270510728-BR 12.750 20$-BR-1;270510936-BR 4.875 21$-BR-1;270511144-BR 12.500 22 BRL-BR-1;270511560-BR 8.875 24$-BR-1;270511768-BR 8.750 25$-BR-1;270511976-BR 10.125 27$-BR-1;270512184-BR 10.250 28 BRL-BR-1;270512392-BR 12.250 30$-BR-1;270512600-BR 8.250 34$-BR-1;270512808-BR 7.125 37$-BR-1;270513016-BR 11.000 40$-BR-1;270495752-BRAD 5.900 21$-BRAD-1;270495960-BRAD 5.750 22$-BRAD-1;410777904-BRAZIL 6M-BR-2;270507608-BRSK 5.750 21$-BRSK-1;406131856-BRZ 24 BRL-BR-2;270500120-BTGP 4.875 16$-BTGP-1;270504904-BVSP 5.500 20$-BVSP-1;270516344-COSN 9.500 XX$-COSN-1;270496584-CRUZ 8.875 20$-CRUZ-1;265586536-CSNA 9.750 13$-CSNA-1;270514888-CTUP 9.750 18$-CTUP-1;267076448-CVRD 4.625 20$-CVRD-1;270516552-DCVL 6.250 16$-DCVL-1;270517176-ELEB 5.750 21$-ELEB-1;270517592-EMBR 6.375 20$-EMBR-1;270518216-FIBR 7.500 20$-FIBR-1;270518424-FIBR 6.750 21$-FIBR-1;270520088-GLBO 5.307 22$-GLBO-1;270521336-HYPM 6.500 21$-HYPM-1;270521752-ITAU 6.200 20$-ITAU-1;270521960-ITAU 5.750 21$-ITAU-1;270522376-ITAU 5.650 22$-ITAU-1;270504280-JBSS 8.250 18$-JBSS-1;270523000-MARF 8.375 18$-MARF-1;265593400-PETR 3.875 16$-PETR-1;265589864-PETR 6.750 41$-PETR-1;265588616-QGOG 5.250 18$-QGOG-1";


//----------------------------------------GLOBAL VARIABLE START------------------------------------------
var globalCountry  = "";
var refBook;
var refPricer;
var ViewID;
var cache;

var resetTable; //in newInstrument controls whether a new timer should be started for resetodd even colored rows
var resetNanoScroller;

//global variables to store state of bond drilldown/popup
var popupBondID = "";
var popupStatus = 0; 

//global hotkey symbol config. Format is: symbolid;symbolname . VBA should read from these to save user prefs
var hotkey1SymbolAndName = "";
var hotkey2SymbolAndName = "";
var hotkey3SymbolAndName = "";
var hotkey4SymbolAndName = "";
var hotkey5SymbolAndName = "";

// global variables to store state of columns, whether to be shown or hidden. VBA should read from these to save user prefs
var YldColState   = "";
var DurColState   = "";
var ZSprdColState = "";

var rawDataShowing; // boolean used to see if raw data table is currently displayed or not

//----------------------------------------GLOBAL VARIABLE END--------------------------------------------


// ---------------------------------------API Definition START ------------------------------------
document.hookBook 				     = _hookBook;
document.hookPricer   				 = _hookPricer;
document.newInstrument				 = _newInstrument;
document.sendMessageNewModelDownload = _sendMessageNewModelDownload;
document.displayAlert				 = _displayAlert;
document.expireInstrument			 = _expireInstrument;
document.setListLabel				 =  _setListLabel;
document.initialiseTable			 = _initialiseTable;
document.updateBenchmarks 			 = _updateBenchmarks;
//document.initialiseBrokerMenu      = _initialiseBrokerMenu;
document.setColumnVisbilityPref 	 = _setColumnVisbilityPref;
document.setHotKeyConfig 			 = _setHotKeyConfig;
document.dataUpdate 				 = _dataUpdate;
document.tradeUpdate                 = _tradeUpdate;
document.depthUpdatePopup 			 = _depthUpdatePopup;
document.tradeUpdatePopup 		     = _tradeUpdatePopup;
document.dataUpdatePopup 			 = _dataUpdatePopup;
document.destroyTable				 = _destroyTable;
document.updateBrokerPageRow 		 = _updateBrokerPageRow;
document.writeBrokerName    		 = _writeBrokerName;
document.setActiveTab    			 = _setActiveTab;
document.initialiseAllFilterDropDowns = _initialiseAllFilterDropDowns;
document.initialiseDropDownSubSector  = _initialiseDropDownSubSector;
document.launchPopup 				  = _launchPopup; 
document.newQuote 					  = _newQuote;
document.updateAnalytics			  = _updateAnalytics;
//document.unExpireInstrument 			= _unExpireInstrument;
// -------------------------- API Definition END --------------------------------



// -------------------------- Initialise START ----------------------------------
function _hookBook (myBookRef,View)
{
	ViewID 			  = View; 
	refBook 		  = myBookRef; 
	cache 			  = {};
	resetTable 		  = true; //on start, you should always start newInstrument timer
	resetNanoScroller = true;

}
function _hookPricer(myPricerRef)
{
	refPricer = myPricerRef;
}
// -------------------------- Initialise END ------------------------------------




// -------------------------- NanoScroller START --------------------------------
function resetNanoWindowSize()
{
	var viewportWidth = $(window).width()-20;
	var viewportHeight = $(window).height()-125;

	$("#application").find(".nano").css(
	{
		width:viewportWidth,
		height:viewportHeight
	});
	
	// $("#application .content").css(
	// {
	//  	width:viewportWidth+20,
	//   	height:viewportHeight+140
	// })
	
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
	resetNanoWindowSize()
});
// -------------------------- NanoScroller END ----------------------------------------------




// ----------------- Event Handler Start ---------------------------------

if (navigator.appName == "Microsoft Internet Explorer")
{
	document.attachEvent("onclick", createDocEvents);

	function createDocEvents (event)
	{
		var target = event.srcElement;

		// if(target.id == "title")
		// {_setActiveTab("1");; return false; }


		// if(target.id == "brokerfilter")
		// {	toggleBrokerFilter(); return false; }
		
		if(target.id == "menucloser")
		{	/*hideMenus();*/ hideRightClickMenu(); return false; }

		// if(target.className == "brkfavnot" || target.className == "brkfavsel")
		// {	selectbroker(target); return false; }

		if(target.id == "mylists")
		{   toggleMyLists(); return false;}

		if(target.className == "mylistlabel")
		{	selectMyList(target); return false; }

		if(target.className == "sectorplusminus")
		{   toggleSectorExpandCollapse(target); return false;}

		if(target.className == "depthplusminus")
		{   toggleDepthExpandCollapse(target); return false;}

		if(target.className.search("mylist") != -1)
		{	toggleMyList(target); return false;}

		if(target.className.search("rightclick") != -1)
		{	toggleRightClickBenchMarks(target); return false;}

		if(target.className.search("colhideshow") != -1)
		{	toggleColumnVisibility(target); return false;}

		// if(target.className.search("tablink") != -1)
		// {  
			// if(target.getAttribute("tabtype") == "main")
			// {	toggleMainTab(target); return false; }
			// else if(target.getAttribute("tabtype") == "cntry")
			// {	togglecountryTab(target); return false;	}
			// else if(target.getAttribute("tabtype") == "brk")
			// {	togglebrokerTab(target); return false;	}
			// else
			// {	return false;	}
		// }

		if(target.id == "backgroundPopup" || target.id == "popupContactClose")
		{	disablePopup(); return false; }

		if(target.className.search("clickname") != -1 )
		{
			var symbol = target.parentNode.parentNode.id + ";" + target.innerText;
			//refBook.launchBondPopup(symbol);
			//_launchPopup(symbol); //no longer needed. Called from VBA

			return false;			
		}
		if(target.className.search("moretrades") != -1 )
		{// access the symid attribute, which should have the "symbolname;symbolid" string already embedded in the DOM
			var symbol = target.getAttribute("symid");
			//refBook.launchBondPopup(symbol); 
			//_launchPopup(symbol); //no longer needed. Called from VBA
			return false;
		}

		if(target.id == "hotkeyanchor")
		{	toggleHotKeyDropDown();return false;}

		if(target.className.search("hkfavnot") != -1 || target.className.search("hkfavsel") != -1)
		{	selectHotKey(target); return false; }

		if(target.className.search("brkclick") != -1)
		{
			toggleBrokerPages(target);
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

			var region 		= "";
			var country 	= "";
			var sector 		= "";
			var subsector 	= "";

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

			return false;
		}
		if(target.id == "closetable")
		{
			_destroyTable();
			document.getElementById("fixedheader").innerHTML = "";
			document.getElementById("closetable").innerHTML	 = "";
			_setListLabel("Choose Something. Anything.");	

			createForm();
	
			/* WHEN VBA RECIVES THIS EVENT, IT SHOULD CALL _initialiseAllFilterDropDowns()*/
			//refBook.tableClosed();

			return false;
		}


		if(target.className == "buttontext")
		{	
			if(target.id == "button1")
			{	
				//buttonBarMouseDown(target); 
				var bond = hotkey1SymbolAndName;
			}
			else if(target.id == "button2")
			{	
				//buttonBarMouseDown(target); 
				var bond = hotkey2SymbolAndName;
			}
			else if(target.id == "button3")
			{	
				//buttonBarMouseDown(target); 
				var bond = hotkey3SymbolAndName;
			}
			else if(target.id == "button4")
			{	
				//buttonBarMouseDown(target); 
				var bond = hotkey4SymbolAndName;
			}
			else if(target.id == "button5")
			{	
				//buttonBarMouseDown(target); 
				var bond = hotkey5SymbolAndName;
			}
			if(bond != "")
			{	
				//refBook.launchBondPopup(symbol);
				//_launchPopup(bond); //no longer needed. Called from VBA
				return false;				
			}
			return false;	
		}
			
	}

	//right click menu
	document.attachEvent("oncontextmenu",createRightClickEvent);
	function createRightClickEvent(event)
	{
		if (event.srcElement.nodeName =="TH" && event.srcElement.parentNode.id == "hookforrightclick")
		{//table header show hide columns right click menu

			//document.body.style.cursor = 'wait';
			//var target = event.srcElement;
			//showHeaderRightClickMenu(target);
			//document.body.style.cursor = 'default';
			return false;

		}
		else if(event.srcElement.nodeName =="TD")
		{//table body show regular right click
			var target = event.srcElement.parentNode; //parentNode because user clicks on cell, and you need row
			if(target.getAttribute("depthRow") == "false")	
			{ showRightClickMenu(target); }
			return false;
		}
		

		if(event.srcElement.className.search("clickname") != -1 )
		{
			var symbol = event.srcElement.parentNode.parentNode.id + ";" + event.srcElement.innerText;
			//alert("launch bond popup.html for: " + symbol );
			//refBook.launchBondPopup(symbol);
			// _launchPopup(symbol); //no longer needed. Called from VBA
			
			return false;			
		}
		return false;
	}


	//hot key events 1,2,3,4,5
	document.attachEvent("onkeypress",hotkeypress)
	function hotkeypress(event)
	{
		//don't need anything happening when user types in search box
		//if(event.srcElement.id == "search")
		//{	return; }

		if(event.keyCode==27 && popupStatus==1)
		{  disablePopup(); return false; }

		if(event.keyCode == 49 || event.keyCode == 50 || event.keyCode == 51 || event.keyCode == 52 || event.keyCode == 53)
		{
			
			if(popupStatus==0)
			{ //if the popup is already showing don't show it again! 

				if(event.keyCode == 49)
				{	var bond = hotkey1SymbolAndName;}
				else if (event.keyCode == 50) 
				{	var bond = hotkey2SymbolAndName;}
				else if (event.keyCode == 51) 
				{	var bond = hotkey3SymbolAndName;}
				else if (event.keyCode == 52) 
				{	var bond = hotkey4SymbolAndName;}
				else if (event.keyCode == 53) 
				{	var bond = hotkey5SymbolAndName;}	

				if(bond != "")
				{	
					//refBook.launchBondPopup(symbol);
					//_launchPopup(bond); //no longer needed. Called from VBA
				}
			}

			return false;
		}
		
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
		hideRightClickMenu();
		document.detachEvent("onmousewheel",mouseWheel);
	}

	document.attachEvent("onkeydown",upDownPageUpPageDown);
	
	function upDownPageUpPageDown(event)
	{
		hideRightClickMenu();
		document.detachEvent("onkeydown",mouseWheel);
	}

}

// ------------------------------- Event Handler End -----------------------------------------------




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
// 3. refBook.tableClosed() - call back for vba indicating that _initialiseAllFilterDropDowns(Region,Country,Sector) should be invoked in vba to populated dropdowns

function _initialiseAllFilterDropDowns(Region,Country,Sector)
{
	$("#filterplaceholder").css("height","500px");
	_setListLabel("Choose Something. Anything.");
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

/* Expose this function to VBA because it's dynamically populated based on the value of sector*/
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
	var filterplaceholder 			= document.getElementById("filterplaceholder")
	filterplaceholder.innerHTML 	= "";
	filterplaceholder.style.height 	= 0;
	document.getElementById("closetable").innerHTML = "";
	document.getElementById("fullviewcountry").innerHTML = "";
}

// -------------------------- FILTER FORM END   ----------------------------------------------







// ------------------------- Bottom Button Bar START ---------------------------------

function buttonBarMouseUp(target)
{
	target.className 			= "buttontext";
	target.parentNode.className = "button";
}
function buttonBarMouseDown(target)
{
	target.className 			= "buttontext mousedown";
	target.parentNode.className = "button mousedown";

	window.setTimeout(function(){buttonBarMouseUp(target)}, 250);
}

function _sendMessageNewModelDownload(url)
{
	var d = new Date();
	var min = d.getMinutes()
	if(min < 10 )
		min = "0" + min;

	document.getElementById("buttonbaralert").innerHTML = "NEW VERSION OF BBQ AVAILABLE. <A id='downloadlink' target='_blank' HREF='" + url + "'>Click here to download</A>";

	$("#buttonbaralert").fadeIn('slow');
}
function _displayAlert(symbol, symbolName,sector)
{
	var d = new Date();
	var min = d.getMinutes()
	if(min < 10 )
		min = "0" + min;

	document.getElementById("buttonbaralert").innerHTML = "New Bond Added: " + symbol + "/" + symbolName + "/" + sector + " @ " + d.getHours() + ":" + min;
	$("#buttonbaralert").show();
	window.setTimeout("$('#buttonbaralert').fadeOut('slow');", 5000);
	
}


// ------------------------- Bottom Button Bar START END ---------------------------------






// ------------------------- Add/Remove Bond Start --------------------------------

/*
	SYNOPSYS: Provides a different way of inserting than the _newInstrument method, 
	Here the VBA will specify which symbol the new quote/instrument should be inserted after. 
	If index is "", then insert at the front
*/
function _newQuote(symbol,symbolName,sector,symType,index)
{
	hideRightClickMenu();
 
 	var sectorTable  = document.getElementById(sector); //need this step because jquery can't seem to handle spaces or quotes in an id

 	var table 		 = document.getElementById(sector);

	var rowTemplate  = [];
	var k 			 = 0;
	rowTemplate[k++] = '<TR id="#isin"  class="odd expand flash" grouping="#issuer" depthRow="false">'; 		//[0]
	rowTemplate[k++] = '<TD class="name" id="#bbqnameid"><img class="noimage" src="blank.png"/><span class="clickname">#bbqName</span></TD>'; 	//[1]

	rowTemplate[k++] = '<TD class="trades" 	  id="#bbqtrades">&nbsp;</TD>'; 										//[2]

	rowTemplate[k++] = '<TD class="time" 	  id="#bbqTimeBid">&nbsp;</TD>'; 										//[3]
	rowTemplate[k++] = '<TD class="brokers"  id="#bbqBrokersBid">&nbsp;</TD>'; 										//[4]
	rowTemplate[k++] = '<TD class="size" 	  id="#bbqSzBid">&nbsp;</TD>'; 											//[5]
	rowTemplate[k++] = '<TD class="bid" 	  id="#bbqPxBid">&nbsp;</TD>'; 											//[6]
	rowTemplate[k++] = '<TD class="ask" 	  id="#bbqPxAsk">&nbsp;</TD>';											//[7]
	rowTemplate[k++] = '<TD class="size" 	  id="#bbqSzAsk">&nbsp;</TD>'; 											//[8]
	rowTemplate[k++] = '<TD class="brokers"  id="#bbqBrokersAsk">&nbsp;</TD>'; 										//[9]
	rowTemplate[k++] = '<TD class="time"  	  id="#bbqTimeAsk">&nbsp;</TD>'; 										//[10]
	rowTemplate[k++] = '<TD class="byield"    id="#bbqYieldBid">&nbsp;</TD>'; 										//[11]
	rowTemplate[k++] = '<TD class="ayield"    id="#bbqYieldAsk">&nbsp;</TD>'; 										//[12]
	rowTemplate[k++] = '<TD class="bduration" id="#bbqDurationBid">&nbsp;</TD>'; 									//[13]
	rowTemplate[k++] = '<TD class="aduration" id="#bbqDurationAsk">&nbsp;</TD>'; 									//[14]
	rowTemplate[k++] = '<TD class="bzspread"  id="#bbqZsprdBid">&nbsp;</TD>'; 										//[15]
	rowTemplate[k++] = '<TD class="azspread"  id="#bbqZsprdAsk">&nbsp;</TD></TR>';									//[16]
	rowTemplate[k++] = '<TR id="#bbqDEPTH" class="collapse"  grouping="#issuer" usedtobe="" depthRow="true"><TD  class="depthcolspan" colspan=#colspan></TD></TR>';//[17]


 	rowTemplate[0] = rowTemplate[0].replace('#isin',symbol);	
 //	rowTemplate[0] = rowTemplate[0].replace('#oddEven',evenOrOddRow);
 //	rowTemplate[0] = rowTemplate[0].replace('#issuer',grouping);
 	rowTemplate[1] = rowTemplate[1].replace('#bbqName',symbolName);
 	rowTemplate[1] = rowTemplate[1].replace('#bbqnameid',symbol + "NME");
	
	if(symType == 1) //only put in the expand.png if it's an orderbook instrument (i.e. has depth)
	{	
		rowTemplate[1] = rowTemplate[1].replace('blank','expand');
		rowTemplate[1] = rowTemplate[1].replace('noimage','depthplusminus');
	}

	rowTemplate[2]   = rowTemplate[2].replace('#bbqtrades',symbol 	+ "TRDS");

 	rowTemplate[3]   = rowTemplate[3].replace('#bbqTimeBid',symbol 	+ "TIMBID");
 	rowTemplate[4]   = rowTemplate[4].replace('#bbqBrokersBid',symbol + "BRKBID");
 	rowTemplate[5]   = rowTemplate[5].replace('#bbqSzBid',symbol 		+ "SZBID");
 	rowTemplate[6]   = rowTemplate[6].replace('#bbqPxBid',symbol 		+ "PXBID");
 	rowTemplate[7]   = rowTemplate[7].replace('#bbqPxAsk',symbol 		+ "PXASK");
 	rowTemplate[8]   = rowTemplate[8].replace('#bbqSzAsk',symbol 		+ "SZASK");
 	rowTemplate[9]   = rowTemplate[9].replace('#bbqBrokersAsk',symbol + "BRKASK");
 	rowTemplate[10]  = rowTemplate[10].replace('#bbqTimeAsk',symbol 	+ "TIMASK");
 	rowTemplate[11]  = rowTemplate[11].replace('#bbqYieldBid',symbol 	+ "YLDBID");
 	rowTemplate[12]  = rowTemplate[12].replace('#bbqYieldAsk',symbol 	+ "YLDASK");
 	rowTemplate[13]  = rowTemplate[13].replace('#bbqDurationBid',symbol + "DURBID");
 	rowTemplate[14]  = rowTemplate[14].replace('#bbqDurationAsk',symbol + "DURASK");
 	rowTemplate[15]  = rowTemplate[15].replace('#bbqZsprdBid',symbol 	+ "ZSPBID");
 	rowTemplate[16]  = rowTemplate[16].replace('#bbqZsprdAsk',symbol 	+ "ZSPASK");
 	rowTemplate[17]  = rowTemplate[17].replace('#bbqDEPTH',symbol 	+ "MD");	
 	//rowTemplate[17]  = rowTemplate[17].replace('#issuer',grouping);
 	
	var colspan = 16;
	if (YldColState == "hidden")
	{
		rowTemplate[11] = rowTemplate[11].replace("byield","byield hide")		
		rowTemplate[12] = rowTemplate[12].replace("ayield","ayield hide")
		colspan = colspan - 2;
	}	
	if (DurColState == "hidden")
	{
		rowTemplate[13] = rowTemplate[13].replace("bduration","bduration hide")		
		rowTemplate[14] = rowTemplate[14].replace("aduration","aduration hide")
		colspan = colspan - 2;
	}		
	if (ZSprdColState == "hidden")
	{
		rowTemplate[15] = rowTemplate[15].replace("bzspread","bzspread hide")		
		rowTemplate[16] = rowTemplate[16].replace("azspread","azspread hide")
		colspan = colspan - 2;
	}	

	rowTemplate[17] = rowTemplate[17].replace("#colspan",colspan.toString());
 	
 	rowTemplate = rowTemplate.join("");
	
	if(index == "")
	{
		$(rowTemplate).insertBefore("#" + table.rows[1].id ); //it's 1, not zero because of the hidden table header
		//alert(table.rows[1].id);	
	}
	else
	{
		$(rowTemplate).insertAfter("#" + index + "MD");	//make sure to insert after the hidden MD row of a symbol. 
	}

	if (resetTable == true)  
	{//only reset the row colors every 10 seconds (approx.)
		resetTable = false;
		tableReset(sector);		
	}

 	_displayAlert(symbol, symbolName,sector);
	window.setTimeout(function(){$("#"+symbol).removeClass("flash");}, 5000)
	
}

 function _newInstrument(symbol,symbolName,sector,view,grouping,symType)
 {
 	hideRightClickMenu();

 	//var evenOrOddRow = "odd";
 	var sectorTable  = document.getElementById(sector); //need this step because jquery can't seem to handle spaces or quotes in an id
 	var $groupLast   = $(sectorTable).find('tr[grouping="'+ grouping + '"]').last(); //find the last bond of a group, e.g the GAZPROM level grouping of instruments

 	var table 		 = document.getElementById(sector);
 	
	var rowTemplate  = [];
	var k 			 = 0;
	rowTemplate[k++] = '<TR id="#isin"  class="odd expand flash" grouping="#issuer" depthRow="false">'; 		//[0]
	rowTemplate[k++] = '<TD class="name" id="#bbqnameid"><img class="noimage" src="blank.png"/><span class="clickname">#bbqName</span></TD>'; 	//[1]

	rowTemplate[k++] = '<TD class="trades" 	  id="#bbqtrades">&nbsp;</TD>'; 										//[2]

	rowTemplate[k++] = '<TD class="time" 	  id="#bbqTimeBid">&nbsp;</TD>'; 										//[3]
	rowTemplate[k++] = '<TD class="brokers"  id="#bbqBrokersBid">&nbsp;</TD>'; 										//[4]
	rowTemplate[k++] = '<TD class="size" 	  id="#bbqSzBid">&nbsp;</TD>'; 											//[5]
	rowTemplate[k++] = '<TD class="bid" 	  id="#bbqPxBid">&nbsp;</TD>'; 											//[6]
	rowTemplate[k++] = '<TD class="ask" 	  id="#bbqPxAsk">&nbsp;</TD>';											//[7]
	rowTemplate[k++] = '<TD class="size" 	  id="#bbqSzAsk">&nbsp;</TD>'; 											//[8]
	rowTemplate[k++] = '<TD class="brokers"  id="#bbqBrokersAsk">&nbsp;</TD>'; 										//[9]
	rowTemplate[k++] = '<TD class="time"  	  id="#bbqTimeAsk">&nbsp;</TD>'; 										//[10]
	rowTemplate[k++] = '<TD class="byield"    id="#bbqYieldBid">&nbsp;</TD>'; 										//[11]
	rowTemplate[k++] = '<TD class="ayield"    id="#bbqYieldAsk">&nbsp;</TD>'; 										//[12]
	rowTemplate[k++] = '<TD class="bduration" id="#bbqDurationBid">&nbsp;</TD>'; 									//[13]
	rowTemplate[k++] = '<TD class="aduration" id="#bbqDurationAsk">&nbsp;</TD>'; 									//[14]
	rowTemplate[k++] = '<TD class="bzspread"  id="#bbqZsprdBid">&nbsp;</TD>'; 										//[15]
	rowTemplate[k++] = '<TD class="azspread"  id="#bbqZsprdAsk">&nbsp;</TD></TR>';									//[16]
	rowTemplate[k++] = '<TR id="#bbqDEPTH" class="collapse"  grouping="#issuer" usedtobe="" depthRow="true"><TD  class="depthcolspan" colspan=#colspan></TD></TR>';//[17]


 	rowTemplate[0] = rowTemplate[0].replace('#isin',symbol);	
 	//rowTemplate[0] = rowTemplate[0].replace('#oddEven',evenOrOddRow);
 	rowTemplate[0] = rowTemplate[0].replace('#issuer',grouping);
 	rowTemplate[1] = rowTemplate[1].replace('#bbqName',symbolName);
 	rowTemplate[1] = rowTemplate[1].replace('#bbqnameid',symbol + "NME");
	
	if(symType == 1) //only put in the expand.png if it's an orderbook instrument (i.e. has depth)
	{	
		rowTemplate[1] = rowTemplate[1].replace('blank','expand');
		rowTemplate[1] = rowTemplate[1].replace('noimage','depthplusminus');
	}

	rowTemplate[2]   = rowTemplate[2].replace('#bbqtrades',symbol 	+ "TRDS");

 	rowTemplate[3]   = rowTemplate[3].replace('#bbqTimeBid',symbol 	+ "TIMBID");
 	rowTemplate[4]   = rowTemplate[4].replace('#bbqBrokersBid',symbol + "BRKBID");
 	rowTemplate[5]   = rowTemplate[5].replace('#bbqSzBid',symbol 		+ "SZBID");
 	rowTemplate[6]   = rowTemplate[6].replace('#bbqPxBid',symbol 		+ "PXBID");
 	rowTemplate[7]   = rowTemplate[7].replace('#bbqPxAsk',symbol 		+ "PXASK");
 	rowTemplate[8]   = rowTemplate[8].replace('#bbqSzAsk',symbol 		+ "SZASK");
 	rowTemplate[9]   = rowTemplate[9].replace('#bbqBrokersAsk',symbol + "BRKASK");
 	rowTemplate[10]  = rowTemplate[10].replace('#bbqTimeAsk',symbol 	+ "TIMASK");
 	rowTemplate[11]  = rowTemplate[11].replace('#bbqYieldBid',symbol 	+ "YLDBID");
 	rowTemplate[12]  = rowTemplate[12].replace('#bbqYieldAsk',symbol 	+ "YLDASK");
 	rowTemplate[13]  = rowTemplate[13].replace('#bbqDurationBid',symbol + "DURBID");
 	rowTemplate[14]  = rowTemplate[14].replace('#bbqDurationAsk',symbol + "DURASK");
 	rowTemplate[15]  = rowTemplate[15].replace('#bbqZsprdBid',symbol 	+ "ZSPBID");
 	rowTemplate[16]  = rowTemplate[16].replace('#bbqZsprdAsk',symbol 	+ "ZSPASK");
 	rowTemplate[17]  = rowTemplate[17].replace('#bbqDEPTH',symbol 	+ "MD");	
 	rowTemplate[17]  = rowTemplate[17].replace('#issuer',grouping);
 	
	var colspan = 16;
	if (YldColState == "hidden")
	{
		rowTemplate[11] = rowTemplate[11].replace("byield","byield hide")		
		rowTemplate[12] = rowTemplate[12].replace("ayield","ayield hide")
		colspan = colspan - 2;
	}	
	if (DurColState == "hidden")
	{
		rowTemplate[13] = rowTemplate[13].replace("bduration","bduration hide")		
		rowTemplate[14] = rowTemplate[14].replace("aduration","aduration hide")
		colspan = colspan - 2;
	}		
	if (ZSprdColState == "hidden")
	{
		rowTemplate[15] = rowTemplate[15].replace("bzspread","bzspread hide")		
		rowTemplate[16] = rowTemplate[16].replace("azspread","azspread hide")
		colspan = colspan - 2;
	}	

	rowTemplate[17] = rowTemplate[17].replace("#colspan",colspan.toString());
 	
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
		tableReset(sector);		
	}

 	_displayAlert(symbol, symbolName,sector);
	window.setTimeout(function(){$("#"+symbol).removeClass("flash");}, 5000)
	
}

function tableReset(sector)
{ /*SYNOPSYS- resetting row colours in every call is too expensive. This function 
			  is called everytime resetTable is true, and will reset the row colours 
			  10 seconds later. Note that rowcolour reset is only triggered by 
			  a newinstrument insertion
   */
	window.setTimeout(function(){resetOddEvenColour(sector);resetTable = true;},10000);	
}
function resetOddEvenColour(sector)
{
	var table   	 = document.getElementById(sector);		
	if(table != null) //the user may have closed the table and gone back to the filter form
	{
		var length  	 = table.rows.length;
		var evenOrOddRow = "";
		var counter = 0; //need extra counter because of the hidden market depth rows, they make it difficult to determine odd or even

		for(var i=1;i<length;i=i+2)//start at 1 because you don't want the header
		{
			var remainder    = counter%2;
			
			if(remainder == 0)
				evenOrOddRow = "odd";
			else
				evenOrOddRow = "even";

			var $curRow = $(table.rows[i]);

			//the rows already have odd/row class value, so replace accordingly
			if ($curRow.hasClass("odd"))
				$curRow[0].className = modifyClassName($curRow[0].className,"odd",evenOrOddRow);
			else 
				$curRow[0].className = modifyClassName($curRow[0].className,"even",evenOrOddRow);
			
			//colour the depth row the same colour as its parent row			
			var $depth = $(table.rows[i+1]).find("table");
			if($depth.length != 0)
			{
				$depth.addClass(evenOrOddRow);
			}

			counter++;
		}
	}




}

// function resetOddEvenColourOBSOLETE(sector,symbol,evenOrOddRow)
// {
// 	var table   = document.getElementById(sector);		
// 	var length  = table.rows.length;

// 	var actualTableLen 	= length - 1; //need this because table headers are counted as well
// 	var symbolIndex 	= table.rows.namedItem(symbol).rowIndex;
	
// 	if((symbolIndex + 2) < actualTableLen) //if it's the last row already, don't bother with reseting row colours, plus 2 because of header and hidden depth row
// 	{
// 		var evenOdd = "";
// 		var counter = 0; //need extra counter because of the hidden market depth rows, they make it difficult to determine odd or even
		
// 		if (evenOrOddRow == "even")
// 			counter = 1;
// 		else
// 			counter = 0;

// 		var startRowIndex = table.rows.namedItem(symbol).rowIndex + 2;

// 		//only loop through the remaining 
// 		for(var i=startRowIndex;i<length;i=i+2)
// 		{
// 			var remainder = counter%2;
// 			if(remainder == 0)
// 				evenOdd = "even";
// 			else
// 				evenOdd = "odd";
			
// 			var $curRow = $(table.rows[i]);
	
	
// 			//the rows already have odd/row class value, so replace accordingly
// 			if ($curRow.hasClass("odd"))
// 				$curRow[0].className = modifyClassName($curRow[0].className,"odd",evenOdd);
// 			else 
// 				$curRow[0].className = modifyClassName($curRow[0].className,"even",evenOdd);
						
// 			counter++;
			
// 		}
// 	}
// }



function _expireInstrument(symbol,sector,view,side)
{
	var row = document.getElementById(symbol);
	//row.className = "expired";
	if(side == "bid")
	{
		row.children[symbol+"BRKBID"].className = "brokers expired";
		row.children[symbol+"TIMBID"].className = "time expired";
		row.children[symbol+"SZBID"].className 	= "size expired";
		row.children[symbol+"PXBID"].className 	= "bid expired";

		row.children[symbol+"YLDBID"].className 	= "byield expired";
		row.children[symbol+"DURBID"].className 	= "bduration expired";
		row.children[symbol+"ZSPBID"].className 	= "bzspread expired";
		

		//only expire the ticker column if both bid/ask are expired
		// if(row.children[symbol+"PXASK"].className .search("expired") != -1)
		// {	
		// 	row.children[symbol+"NME"].className += " expired";		
		// 	row.children[symbol+"TRDS"].className += " expired";		
		// }
	}
	else if(side == "ask")
	{
		row.children[symbol+"BRKASK"].className = "brokers expired";
		row.children[symbol+"TIMASK"].className = "time expired";
		row.children[symbol+"SZASK"].className 	= "size expired";
		row.children[symbol+"PXASK"].className 	= "ask expired";

		row.children[symbol+"YLDASK"].className = "ayield expired";
		row.children[symbol+"DURASK"].className = "aduration expired";
		row.children[symbol+"ZSPASK"].className = "azspread expired";


		//only expire the ticker column if both bid/ask are expired
		// if(row.children[symbol+"PXBID"].className .search("expired") != -1)
		// {
		// 	row.children[symbol+"NME"].className += " expired";		
		// 	row.children[symbol+"TRDS"].className += " expired";
		// }

	}
	
	
	// var img = row.firstChild.firstChild;
	// img.className = "noimage";
	// img.setAttribute("src","blank.png");
}

// function _unExpireInstrument(symbol,sector,view,side)
// {
// 	var row = document.getElementById(symbol);
// 	//row.className = "expired";
// 	if(side == "bid")
// 	{
// 		row.children[symbol+"BRKBID"].className = row.children[symbol+"BRKBID"].className.replace("expired", "");
// 		row.children[symbol+"TIMBID"].className = row.children[symbol+"TIMBID"].className.replace("expired", ""); 
// 		row.children[symbol+"SZBID"].className 	= row.children[symbol+"SZBID"].className.replace("expired", "");
// 		row.children[symbol+"PXBID"].className  = row.children[symbol+"PXBID"].className.replace("expired", "");

// 		//only expire the ticker column if both bid/ask are expired
// 		if(row.children[symbol+"PXASK"].className .search("expired") != -1)
// 		{	
// 			row.children[symbol+"NME"].className = row.children[symbol+"NME"].className.replace("expired", "");
// 			row.children[symbol+"TRDS"].className = row.children[symbol+"TRDS"].className.replace("expired", "");
// 		}
// 	}
// 	else if(side == "ask")
// 	{
// 		row.children[symbol+"BRKASK"].className = row.children[symbol+"BRKASK"].className.replace("expired", "");
// 		row.children[symbol+"TIMASK"].className = row.children[symbol+"TIMASK"].className.replace("expired", "");
// 		row.children[symbol+"SZASK"].className  = row.children[symbol+"SZASK"].className.replace("expired", "");
// 		row.children[symbol+"PXASK"].className  = row.children[symbol+"PXASK"].className.replace("expired", "");

// 		//only expire the ticker column if both bid/ask are expired
// 		if(row.children[symbol+"PXBID"].className .search("expired") != -1)
// 		{
// 			row.children[symbol+"NME"].className = row.children[symbol+"NME"].className.replace("expired", "");
// 			row.children[symbol+"TRDS"].className = row.children[symbol+"TRDS"].className.replace("expired", "");
// 		}

// 	}	
// }

// ------------------------- Add/Remove Bond End --------------------------------




// ------------------------- List Setup Funtions Start --------------------------------
function _setListLabel(pCountry)
{
	document.getElementById("fullviewcountry").innerHTML = pCountry;
	globalCountry = pCountry;
	document.getElementById("closetable").innerHTML = "filter";

}

function setHeaders()
{
	var fixedHeader = [];
	var i 			= 0;
	
	fixedHeader[i++] = '<table class="fixedheader"><thead><tr id="hookforrightclick">'; 		//[0]
	fixedHeader[i++] = '<th class="name"></th>';						//[1]
	fixedHeader[i++] = '<th class="trades">Trades</th>';				//[2]	
	fixedHeader[i++] = '<th class="time">Time</th>';					//[3]
	fixedHeader[i++] = '<th class="brokers">C</th>';					//[4]
	fixedHeader[i++] = '<th class="size">Size</th>';					//[5]
	fixedHeader[i++] = '<th class="bid">Bid</th>';						//[6]
	fixedHeader[i++] = '<th class="ask">Ask</th>';						//[7]
	fixedHeader[i++] = '<th class="size">Size</th>';					//[8]
	fixedHeader[i++] = '<th class="brokers">C</th>';					//[9]
	fixedHeader[i++] = '<th class="time">Time</th>';					//[10]
	fixedHeader[i++] = '<th class="byield">BYld</th>';				//[11]
	fixedHeader[i++] = '<th class="ayield">AYld</th>';				//[12]
	fixedHeader[i++] = '<th class="bduration">BDur</th>';			//[13]
	fixedHeader[i++] = '<th class="aduration">ADur</th>';			//[14]
	fixedHeader[i++] = '<th class="bzspread">BZSpr</th>';			//[15]
	fixedHeader[i++] = '<th class="azspread">AZSpr</th>';			//[16]
	fixedHeader[i++] = '</tr></thead><col width=110><col width=150><col width=47><col width=80><col width=50><col width=100><col width=100><col width=50><col width=80><col width=47></table>';			//[17]
									//Ticker 		trades 			time 		 code 		   Size 		  bid 			ask 		  size 			 code 		time
	if (YldColState == "hidden")
	{
		fixedHeader[11] = fixedHeader[11].replace("byield","byield hide")		
		fixedHeader[12] = fixedHeader[12].replace("ayield","ayield hide")
	}	
	if (DurColState == "hidden")
	{
		fixedHeader[13] = fixedHeader[13].replace("bduration","bduration hide")		
		fixedHeader[14] = fixedHeader[14].replace("aduration","aduration hide")
	}	
	if (ZSprdColState == "hidden")
	{
		fixedHeader[15] = fixedHeader[15].replace("bzspread","bzspread hide")		
		fixedHeader[16] = fixedHeader[16].replace("azspread","azspread hide")
	}	
	
	document.getElementById("fixedheader").innerHTML = fixedHeader.join("");
}

function _destroyTable()
{
	document.getElementById("tablecontentfullview").innerHTML = "";
	cache = {};
}

function _initialiseTable (symbols, sectorid,sector,view, stat1, stat2) 
{
	_setColumnVisbilityPref("Y","Y","Y");
	setHeaders();

	var fullView  = []; //this is the html table, which the header and all rows will be inserted into
	var i 		  = 0;
	fullView[i++] = '<table class="quotes" id="#sector">'; 	//tableStart 	 [0]
	fullView[i++] = ""; 						//tableHeader 	 [1]
	fullView[i++] = "<tbody>";					//tableBodyStart [2]
	fullView[i++] = "";							//tableRows 	 [3]
	fullView[i++] = "</tbody></table>";			//tableBodyEnd 	 [4]

	var rowIndex = 0; //set up the rows of the table. The row section of the totalView array, is an array of strings (joined rowTemplate instances)
	fullView[0]  = fullView[0].replace('#sector',sectorid); //set the id of the table
	fullView[3]  = [];


	//Create individual header for sub table. This holds summary stats for the whole sub table. 
	var tableHeader  = [];
	var j 			 = 0;
	tableHeader[j++] = '<thead class="subheaders"><tr>';																			
	tableHeader[j++] =	'<th class="name"><img class="sectorplusminus" src="collapse.png"/>'+ sector +'</th>';	
	tableHeader[j++] =	'<th class="">'+ stat1 + '</th>';														
	tableHeader[j++] =	'<th class="">'+ stat2 + '</th>';												
	tableHeader[j++] =	'<th class=""></th>';
	tableHeader[j++] =	'<th class=""></th>';
	tableHeader[j++] =	'<th class=""></th>';
	tableHeader[j++] =	'<th class=""></th>';
	tableHeader[j++] = 	'<th class=""></th>';
	tableHeader[j++] = 	'<th class=""></th>';
	tableHeader[j++] =	'<th class=""></th>';

	tableHeader[j++] =	'<th class="byield"></th>';
	tableHeader[j++] =	'<th class="ayield"></th>';

	tableHeader[j++] =	'<th class="bduration"></th>';
	tableHeader[j++] =	'<th class="aduration"></th>';

	tableHeader[j++] =	'<th class="bzspread"></th>';
	tableHeader[j++] =	'<th class="azspread"></th>';
	tableHeader[j++] =	'</tr></thead><col width=110><col width=150><col width=47><col width=80><col width=50><col width=100><col width=100><col width=50><col width=80><col width=47>'; 
									  //Ticker 		 trades 		 time 		   code 		 size			bid 	 	 ask 		   size 			 code 		time

	if (YldColState == "hidden")
	{
		tableHeader[11] = tableHeader[11].replace("byield","byield hide")		
		tableHeader[12] = tableHeader[12].replace("ayield","ayield hide")

		$("#hookforrightclick th:nth-child(11)").addClass("hide"); 
		$("#hookforrightclick th:nth-child(12)").addClass("hide"); 
	}	
	if (DurColState == "hidden")
	{
		tableHeader[13] = tableHeader[13].replace("bduration","bduration hide")		
		tableHeader[14] = tableHeader[14].replace("aduration","aduration hide")
		
		$("#hookforrightclick th:nth-child(13)").addClass("hide"); 
		$("#hookforrightclick th:nth-child(14)").addClass("hide"); 
	}	
	if (ZSprdColState == "hidden")
	{
		tableHeader[15] = tableHeader[15].replace("bzspread","bzspread hide")		
		tableHeader[16] = tableHeader[16].replace("azspread","azspread hide")

		$("#hookforrightclick th:nth-child(15)").addClass("hide"); 
		$("#hookforrightclick th:nth-child(16)").addClass("hide"); 
	}	


	//create a row template that matches the header, declared previously above
	var rowTemplate  = [];
	var k 			 = 0;
	rowTemplate[k++] = '<TR id="#isin" class="#oddEven expand" grouping="#issuer" depthRow="false" >'; 		//[0]
	rowTemplate[k++] = '<TD class="name" id="#bbqnameid"><img class="noimage" src="blank.png"/><span class="clickname">#bbqName</span></TD>'; 	//[1]

	rowTemplate[k++] = '<TD class="trades" 	  id="#bbqtrades">&nbsp;</TD>'; 					//[2]

	rowTemplate[k++] = '<TD class="time" 	  id="#bbqTimeBid">&nbsp;</TD>'; 					//[3]
	rowTemplate[k++] = '<TD class="brokers"  id="#bbqBrokersBid">&nbsp;</TD>'; 					//[4]
	rowTemplate[k++] = '<TD class="size" 	  id="#bbqSzBid">&nbsp;</TD>'; 						//[5]
	rowTemplate[k++] = '<TD class="bid" 	  id="#bbqPxBid">&nbsp;</TD>'; 						//[6]
	rowTemplate[k++] = '<TD class="ask" 	  id="#bbqPxAsk">&nbsp;</TD>';						//[7]
	rowTemplate[k++] = '<TD class="size" 	  id="#bbqSzAsk">&nbsp;</TD>'; 						//[8]
	rowTemplate[k++] = '<TD class="brokers"  id="#bbqBrokersAsk">&nbsp;</TD>'; 					//[9]
	rowTemplate[k++] = '<TD class="time"  	  id="#bbqTimeAsk">&nbsp;</TD>'; 					//[10]
	rowTemplate[k++] = '<TD class="byield"    id="#bbqYieldBid">&nbsp;</TD>'; 					//[11]
	rowTemplate[k++] = '<TD class="ayield"    id="#bbqYieldAsk">&nbsp;</TD>'; 					//[12]
	rowTemplate[k++] = '<TD class="bduration" id="#bbqDurationBid">&nbsp;</TD>'; 				//[13]
	rowTemplate[k++] = '<TD class="aduration" id="#bbqDurationAsk">&nbsp;</TD>'; 				//[14]
	rowTemplate[k++] = '<TD class="bzspread"  id="#bbqZsprdBid">&nbsp;</TD>'; 					//[15]
	rowTemplate[k++] = '<TD class="azspread"  id="#bbqZsprdAsk">&nbsp;</TD></TR>';				//[16]
	rowTemplate[k++] = '<TR id="#bbqDEPTH" class="collapse"  grouping="#issuer" usedtobe="" depthRow="true"><TD class="depthcolspan" colspan=#colspan></TD></TR>';//[16]

	var colspan = 16;
	if (YldColState == "hidden")
	{
		rowTemplate[11] = rowTemplate[11].replace("byield","byield hide")		
		rowTemplate[12] = rowTemplate[12].replace("ayield","ayield hide")
		colspan = colspan - 2;
	}	
	if (DurColState == "hidden")
	{
		rowTemplate[13] = rowTemplate[13].replace("bduration","bduration hide")		
		rowTemplate[14] = rowTemplate[14].replace("aduration","aduration hide")
		colspan = colspan - 2;
	}		
	if (ZSprdColState == "hidden")
	{
		rowTemplate[15] = rowTemplate[15].replace("bzspread","bzspread hide")		
		rowTemplate[16] = rowTemplate[16].replace("azspread","azspread hide")
		colspan = colspan - 2;
	}	

	rowTemplate[17] = rowTemplate[17].replace("#colspan",colspan.toString());
	
	

	//Add the header to the main array where the table's html is stored/created
	fullView[1] 	= tableHeader.join("");
	
	var symbolList = symbols.split(";");
	var bondLength = symbolList.length;
		
	for (var j = 0 ; j <bondLength; j++) 
	{
		var evenOrOddRow = "";
		var remainder    = j%2;
		
		if(remainder == 0)
			evenOrOddRow = "even";
		else
			evenOrOddRow = "odd";

		var nameAndSymbol = symbolList[j].split("-");

		var symbol 	 = nameAndSymbol[0];//get actual symbol
		var name   	 = nameAndSymbol[1];//get the symbol's display name
		var grouping 	 = nameAndSymbol[2];//get the group (aka "aggregate" or "issuer") the symbol belongs to
		var symType  	 = nameAndSymbol[3]

		//create a value-of copy and assign it to the current bond
		var aRow  = rowTemplate.slice(0);		

		aRow[0] = aRow[0].replace('#isin',symbol);
		aRow[0] = aRow[0].replace('#oddEven',evenOrOddRow);
		aRow[0] = aRow[0].replace('#issuer',grouping);
		aRow[1] = aRow[1].replace('#bbqName',name);
		aRow[1] = aRow[1].replace('#bbqnameid',symbol + "NME");
		
		if(symType == 1)
		{	
			aRow[1] = aRow[1].replace('blank','expand');
			aRow[1] = aRow[1].replace('noimage','depthplusminus');
		}

		
		aRow[2]   = aRow[2].replace("#bbqtrades",symbol 	+ "TRDS");

		aRow[3]   = aRow[3].replace('#bbqTimeBid',symbol 	+ "TIMBID");
		aRow[4]   = aRow[4].replace('#bbqBrokersBid',symbol + "BRKBID");
		aRow[5]   = aRow[5].replace('#bbqSzBid',symbol 		+ "SZBID");
		aRow[6]   = aRow[6].replace('#bbqPxBid',symbol 		+ "PXBID");
		aRow[7]   = aRow[7].replace('#bbqPxAsk',symbol 		+ "PXASK");
		aRow[8]   = aRow[8].replace('#bbqSzAsk',symbol 		+ "SZASK");
		aRow[9]   = aRow[9].replace('#bbqBrokersAsk',symbol + "BRKASK");
		aRow[10]  = aRow[10].replace('#bbqTimeAsk',symbol 	+ "TIMASK");
		aRow[11]  = aRow[11].replace('#bbqYieldBid',symbol 	+ "YLDBID");
		aRow[12]  = aRow[12].replace('#bbqYieldAsk',symbol 	+ "YLDASK");
		aRow[13]  = aRow[13].replace('#bbqDurationBid',symbol + "DURBID");
		aRow[14]  = aRow[14].replace('#bbqDurationAsk',symbol + "DURASK");
		aRow[15]  = aRow[15].replace('#bbqZsprdBid',symbol 	+ "ZSPBID");
		aRow[16]  = aRow[16].replace('#bbqZsprdAsk',symbol 	+ "ZSPASK");
		aRow[17]  = aRow[17].replace('#bbqDEPTH',symbol 	+ "MD");
		aRow[17]  = aRow[17].replace('#issuer',grouping);

		fullView[3][rowIndex++] = aRow.join("") 

	}	

	fullView[3] = fullView[3].join("");	
	if(view =="brokerview")
	{
		document.getElementById("tablecontentbrokerview").insertAdjacentHTML("beforeEnd", fullView.join(""));
	}
	else if(view == "fullview")
	{
		document.getElementById("tablecontentfullview").insertAdjacentHTML("beforeEnd", fullView.join(""));
	}
	
	//document.getElementById("tablecontent").innerHTML =  fullView.join("");
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

// ------------------------- List Setup Funtions End --------------------------------

















// ----------------- My BrokerFilter Start ---------------------------------

// function _initialiseBrokerMenu(pBrokers)
// {// Tradition-Y,GFI-N,Evolution-N,StanBroker-Y,BestPriceBroker-Y
//  // Call this function to initialise the broker filter menu. 
//  // XXX Probably want to re-write this to process xml

// 	var brokers = pBrokers.split(",");
// 	var len = brokers.length;
	
// 	var brokerRowMenuTemplate=[];
// 	var l =0;
// 	brokerRowMenuTemplate[l++] = '<li><KBD id="#brokeridx" class="#selectedState">#selectedStateIcon</KBD><div class="brokerfil">#brokeridy</div></li>';

// 	var brokermenu = [];
// 	var m = 0;

// 	for(var i =len-1;i>=0;i--)
// 	{
// 		var broker    = brokers[i].split("-");
// 		var brokerRow = brokerRowMenuTemplate.slice(0);
// 		brokerRow[0] = brokerRow[0].replace("#brokeridx",broker[0]);
// 		brokerRow[0] = brokerRow[0].replace("#brokeridy",broker[0]);

// 		if(broker[1] == 'Y')
// 		{
// 			brokerRow[0] = brokerRow[0].replace("#selectedStateIcon","&#108;");
// 			brokerRow[0] = brokerRow[0].replace("#selectedState","brkfavsel");
// 		}
// 		else
// 		{
// 			brokerRow[0] = brokerRow[0].replace("#selectedStateIcon","&#161;");
// 			brokerRow[0] = brokerRow[0].replace("#selectedState","brkfavnot");
// 		}

// 		brokermenu[m++] = brokerRow[0];
// 	}
// 	document.getElementById("brokerfilterdropdown").innerHTML = brokermenu.join("");
// }
// function toggleBrokerFilter()
// {
// 	var elem = document.getElementById("brokerfilterdropdown");
// 	if(elem.className == "hideme")
// 		elem.className = "show";
// 	else
// 		elem.className = "hideme";
		
// 	var menucloser = document.getElementById("menucloser");
// 	menucloser.className = "bringtofront";

// }
// function selectbroker(target)
// {
// 	var objSrc = target;

// 	if (objSrc.className == 'favnot')
// 	{//a list that was previously not selected, has been clicked on. So respond and enable the button and add to list. 
	
// 		objSrc.innerHTML = '&#108;';
// 		objSrc.className = 'brkfavsel';
// 		alert("Call VBA function to add: " + objSrc.id + " to boker filter preferences");
// 	}
// 	else
// 	{
// 		objSrc.innerHTML = '&#161;';
// 		objSrc.className = 'brkfavnot';				
// 		alert("Call VBA function to save preferences for : " + objSrc.id);
// 	}
// }
// ----------------- My BrokerFilter End ---------------------------------


// function hideMenus()
// {
	
// 	var elem = document.getElementById("brokerfilterdropdown");
// 	elem.className = "hideme";
// 	elem = document.getElementById("mylistsdropdown");
// 	elem.className = "hideme";
	
// 	var menucloser = document.getElementById("menucloser");
// 	menucloser.className = "sendtoback";
// }


// ----------------- My My Lists Start---------------------------------
function toggleMyLists()
{
	var elem = document.getElementById("mylistsdropdown");
	if(elem.className == "hideme")
		elem.className = "show";
	else
		elem.className = "hideme";
	
	var menucloser = document.getElementById("menucloser");
	menucloser.className = "bringtofront";
}
function selectMyList(target)
{
	alert("Call VBA function to launch userform/TotalView window for: "+ target.id);
}

// ----------------- My My Lists End  ---------------------------------





// ----------------- Sector Expand Collapse START ---------------------------------
function toggleSectorExpandCollapse(target)
{// the class: mdduplicatebr is used because we don't want duplicate top borders for the depth. 

	hideRightClickMenu();

	var table = target.parentNode.parentNode.parentNode.parentNode;
	var length = table.rows.length;

	if (target.getAttribute("src") == "collapse.png")
	{//collapse sector
		target.setAttribute("src","expand.png");
		for(var i=length-1;i>=0;i--)
		{
			var tbRow = table.rows[i];
			//collapse depth rows, but remember the state
			if(tbRow.getAttribute("depthRow") == "true" &&  tbRow.className =="mdduplicatebr") 
			{	
				tbRow.setAttribute("usedtobe","expanded");
				tbRow.className = "collapse";
			}

			//collapse non-depth rows
			tbRow.className = modifyClassName(tbRow.className , "expand","collapse");
		}					
	}
	else
	{//expand the sector 
		target.setAttribute("src","collapse.png");
		for(var i=length-1;i>=0;i--)
		{
			var tbRow = table.rows[i];
			if(tbRow.getAttribute("depthRow") == "false")
			{
				tbRow.className = modifyClassName(tbRow.className ,"collapse","expand");
			}
			else
			{
				if(tbRow.getAttribute("usedtobe") == "expanded")
				{
					//table.rows[i].className = modifyClassName(table.rows[i].className ,"collapse","expand"); //tr.expand display:block didn't work with chrome
					tbRow.className = modifyClassName(tbRow.className ,"collapse","mdduplicatebr");
					tbRow.setAttribute("usedtobe","");								
				}	
			}

		}
		//alert("Call VBA function to save in USER PREFs the expanded state of: " + globalCountry + " " + target.parentNode.innerText);
	}

	resetNanoWindowSize(); 
}


function modifyClassName(className,from,to)
{
	return className.replace(from,to);
}


// ----------------- Sector Expand Collapse END ---------------------------------




// ----------------- Depth Expand Collapse START ---------------------------------
function toggleDepthExpandCollapse(target)
{
	hideRightClickMenu();
	var symbolRow = target.parentNode.parentNode; 	
	var depthRow  = target.parentNode.parentNode.nextSibling;
	var colspan = depthRow.firstChild.getAttribute("colspan");

	if (target.getAttribute("src") == "collapse.png")
	{//collapse
		//depthRow.firstChild.setAttribute("colspan",15);
		target.setAttribute("src","expand.png");	
		depthRow.className = "collapse last";
		//depthRow.firstChild.innerHTML = ""; //can't use this, use empty from jquery to avoid memory leaks
		
		$(depthRow.firstChild).empty();
		cache = {}; //clear cache as destroyed depth rows would still be in the cache. 

		//refPricer.GetDepthFor(depthRow.id.substring(0,9),"stop");
		//alert("Call VBA Function to STOP market depth data for: "+ depthRow.id);
	}
	else
	{//expand
	
		var MDTableTemplate = [];
		var n = 0;
		MDTableTemplate[n++] = '<TABLE class="marketdepth #oddEven"><col width=110><tbody>';
		MDTableTemplate[n++] = [];
		MDTableTemplate[n++] = '</tbody></TABLE>'; 

		var oddEven = "odd";

		if(symbolRow.className.search("even") != -1)
			oddEven = "even";			

		MDTableTemplate[0] = MDTableTemplate[0].replace("#oddEven", oddEven);

		//create a row template that matches the header, declared previously above
		var MDTemplate = [];
		var m = 0;
		MDTemplate[m++] = '<TR class="#top">'; 													//[0]
		MDTemplate[m++] = '<TD class="depthfirstcol">&nbsp;</TD>'; 					//[1] 
		MDTemplate[m++] = '<TD class="trades" symid="#symid" id="#trades">&nbsp;</TD>';	//[2] //symid="#symid" - used for storing the id and name of the symbol so later you can pass it to launching the popup 
		MDTemplate[m++] = '<TD class="time" id="#bidtime">&nbsp;</TD>'; 			//[3]
		MDTemplate[m++] = '<TD class="brokers" id="#bbroker">&nbsp;</TD>'; 			//[4]
		MDTemplate[m++] = '<TD class="size" id="#bsize">&nbsp;</TD>'; 				//[5]
		MDTemplate[m++] = '<TD class="bid" id="#bid">&nbsp;</TD>';  				//[6]
		MDTemplate[m++] = '<TD class="ask" id="#ask">&nbsp;</TD>';					//[7]
		MDTemplate[m++] = '<TD class="size" id="#asksize">&nbsp;</TD>'; 			//[8]
		MDTemplate[m++] = '<TD class="brokers" id="#abroker">&nbsp;</TD>'; 			//[9]
		MDTemplate[m++] = '<TD class="time" id="#asktime">&nbsp;</TD>'; 			//[10]
		MDTemplate[m++] = '<TD class="byield" id="#byield">&nbsp;</TD>'; 			//[11]
		MDTemplate[m++] = '<TD class="ayield" id="#ayield">&nbsp;</TD>'; 			//[12]
		MDTemplate[m++] = '<TD class="bduration" id="#bduration">&nbsp;</TD>';		//[13]
		MDTemplate[m++] = '<TD class="aduration" id="#aduration">&nbsp;</TD>'; 		//[14]
		MDTemplate[m++] = '<TD class="bzspread" id="#bzspread">&nbsp;</TD>'; 		//[15]
		MDTemplate[m++] = '<TD class="azspread" id="#azspread">&nbsp;</TD></TR>';	//[16]

		var hidden = false;
		if (YldColState == "hidden")
		{
			MDTemplate[11] = MDTemplate[11].replace("byield","byield hide");		
			MDTemplate[12] = MDTemplate[12].replace("ayield","ayield hide");
			hidden = true;
		}	
		if (DurColState == "hidden")
		{
			MDTemplate[13] = MDTemplate[13].replace("bduration","bduration hide");
			MDTemplate[14] = MDTemplate[14].replace("aduration","aduration hide");
			hidden = true;
		}		
		if (ZSprdColState == "hidden")
		{
			MDTemplate[15] = MDTemplate[15].replace("bzspread","bzspread hide");		
			MDTemplate[16] = MDTemplate[16].replace("azspread","azspread hide");
			hidden = true;
		}	

		var MDTable = MDTableTemplate.slice(0);
		
		for(var o=1;o<6;o++)
		{

			var MDRow = MDTemplate.slice(0);

			// if(o==1)
			// 	MDRow[0] = MDRow[0].replace("#top", "top");
			// else
			// 	MDRow[0] = MDRow[0].replace("#top", "");
			
			if(o==5)
			{//only add the more... to the last row
				MDRow[2] = MDRow[2].replace("&nbsp;", "more...");
				MDRow[2] = MDRow[2].replace("trades", "moretrades");
				MDRow[2] = MDRow[2].replace("#symid", symbolRow.id + ";" + symbolRow.children[symbolRow.id+"NME"].innerText);
			}
			else
			{MDRow[2] = MDRow[2].replace("#trades", symbolRow.id + "TRDS" + o);}

			
			MDRow[3] = MDRow[3].replace("#bidtime", symbolRow.id + "TIMBID" + o);
			MDRow[4] = MDRow[4].replace("#bbroker", symbolRow.id + "BRKBID" + o);
			MDRow[5] = MDRow[5].replace("#bsize"  , symbolRow.id + "SZBID" + o);
			MDRow[6] = MDRow[6].replace("#bid"    , symbolRow.id + "PXBID" + o);
			MDRow[7] = MDRow[7].replace("#ask"	  , symbolRow.id + "PXASK" + o);
			MDRow[8] = MDRow[8].replace("#asksize", symbolRow.id + "SZASK" + o);
			MDRow[9] = MDRow[9].replace("#abroker", symbolRow.id + "BRKASK" + o);
			MDRow[10] = MDRow[10].replace("#asktime", symbolRow.id + "TIMASK" + o);

			MDRow[11] = MDRow[11].replace("#byield"		, symbolRow.id + "YLDBID" + o);
			MDRow[13] = MDRow[13].replace("#bduration"  , symbolRow.id + "YLDBID" + o);
			MDRow[15] = MDRow[15].replace("#bzspread"   , symbolRow.id + "ZSPBIF" + o);

			MDRow[12] = MDRow[12].replace("#ayield"     , symbolRow.id + "YLDASK" + o);
			MDRow[14] = MDRow[14].replace("#aduration"  , symbolRow.id + "DURASK" + o);
			MDRow[16] = MDRow[16].replace("#azspread"   , symbolRow.id + "ZSPASK" + o);

			MDTable[1][o-1] = MDRow.join("");
		}	
		MDTable[1] = MDTable[1].join("");


		target.setAttribute("src","collapse.png");
		depthRow.firstChild.innerHTML = MDTable.join("");

		//depthRow.className = "expand"; //tr.expand display:block didn't work with chrome
		depthRow.className = "mdduplicatebr"; //put this class in there to remove double border

		//refPricer.GetDepthFor(depthRow.id.substring(0,9),"start");
		//alert("Call VBA Function to START market depth data for: "+ depthRow.id);


			// _dataUpdate("AANPXBID2;0.00", "AANSZBID3;00", "AANBRKBID5;GT", "AANTIMBID5;HT");
			// _dataUpdate("AANPXASK1;0.00", "AANSZASK1;00", "AANBRKASK1;GT", "AANTIMASK1;HT")
			// _dataUpdate("AANPXASK2;0.00", "AANSZASK2;00", "AANBRKASK2;GT", "AANTIMASK2;HT")
			// _dataUpdate("AANPXASK3;0.00", "AANSZASK3;00", "AANBRKASK3;GT", "AANTIMASK3;HT")
			// _dataUpdate("AANPXASK4;0.00", "AANSZASK4;00", "AANBRKASK4;GT", "AANTIMASK4;HT")



	}
	
	resetNanoWindowSize(); 


}

// ----------------- Depth Expand Collapse END ---------------------------------





// ----------------- Table Header Right Click Menu START ------------------------------------


function _setColumnVisbilityPref(yieldval,durationval, zspreadval)
{

	if (yieldval =="Y")
	{YldColState = "visible"; }
	else
	{YldColState = "hidden"; }

	if (durationval =="Y")
	{DurColState = "visible"; }
	else
	{DurColState = "hidden"; }

	if (zspreadval =="Y")
	{ZSprdColState = "visible"; }
	else
	{ZSprdColState = "hidden"; }
	
}

function showHeaderRightClickMenu(target)
{
	hideRightClickMenu();
	createHeaderRightClickMenu();

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
function createHeaderRightClickMenu()
{

	var columnRMenu  = []; //this is the html table, which the header and all rows will be inserted into
	var i 		  	 = 0;
	columnRMenu[i++] = '<tr><td class="label">Yield</td><td class="colhideshow #checkbox">#tick</td></tr>'; 			//columnRMenu 	 [0]
	columnRMenu[i++] = '<tr><td class="label">Duration</td><td class="colhideshow #checkbox">#tick</td></tr>';		//columnRMenu 	 [1]
	columnRMenu[i++] = '<tr><td class="label last">Z-Spread</td><td class="colhideshow #checkbox last">#tick</td></tr>'//columnRMenu [2]


	if (YldColState == "visible" || YldColState == undefined)
	{
		columnRMenu[0] = columnRMenu[0].replace("#checkbox","valset");
		columnRMenu[0] = columnRMenu[0].replace("#tick","&#108;");
	}
	else
	{
		columnRMenu[0] = columnRMenu[0].replace("#checkbox","valnot");
		columnRMenu[0] = columnRMenu[0].replace("#tick","&#161;");
	}

	if (DurColState == "visible" || DurColState == undefined)
	{
		columnRMenu[1] = columnRMenu[1].replace("#checkbox","valset");
		columnRMenu[1] = columnRMenu[1].replace("#tick","&#108;");
	}
	else
	{
		columnRMenu[1] = columnRMenu[1].replace("#checkbox","valnot");
		columnRMenu[1] = columnRMenu[1].replace("#tick","&#161;");
	}

	if (ZSprdColState == "visible" || ZSprdColState == undefined)
	{
		columnRMenu[2] = columnRMenu[2].replace("#checkbox","valset");
		columnRMenu[2] = columnRMenu[2].replace("#tick","&#108;");
	}
	else
	{
		columnRMenu[2] = columnRMenu[2].replace("#checkbox","valnot");
		columnRMenu[2] = columnRMenu[2].replace("#tick","&#161;");
	}


	$("#rightclicktable").append(columnRMenu.join(""));

	var menucloser = document.getElementById("menucloser");
	menucloser.className = "bringtofront";

}

function toggleColumnVisibility(target)
{ 

  	var currentCol = target.previousSibling;
  	var colspan    = $("#tablecontentfullview .depthcolspan").attr("colspan");

  	if (currentCol.innerHTML == "Yield")
  	{
  		if(target.className.search("colhideshow valset") != -1)
  		{//currently display, so turn them off

  			target.innerHTML = "&#161;";
			target.className = 'colhideshow valnot';
			YldColState = "hidden";

			//fixed header hide 
			$("#hookforrightclick th:nth-child(11)").addClass("hide"); 
			$("#hookforrightclick th:nth-child(12)").addClass("hide"); 

			//regular table hide
			$("#tablecontentfullview td:nth-child(11),#tablecontentfullview th:nth-child(11)").addClass("hide"); 
			$("#tablecontentfullview td:nth-child(12),#tablecontentfullview th:nth-child(12)").addClass("hide");

			$("#tablecontentfullview .marketdpeth td:nth-child(11)").addClass("hide");
			$("#tablecontentfullview .marketdpeth td:nth-child(12)").addClass("hide");

			$("#tablecontentfullview .depthcolspan").attr("colspan",parseInt(colspan) - 2); // minus 2 because the depth rows have the same number of columns as regular rows
			
  		}
  		else
  		{
  			target.innerHTML = "&#108;";
			target.className = 'colhideshow valset';
			YldColState = "visible";

			//fixed header show 
			$("#hookforrightclick th:nth-child(11)").removeClass("hide"); 
			$("#hookforrightclick th:nth-child(12)").removeClass("hide"); 

			//regular table show 
  			$("#tablecontentfullview td:nth-child(11),#tablecontentfullview th:nth-child(11)").removeClass("hide"); 
			$("#tablecontentfullview td:nth-child(12),#tablecontentfullview th:nth-child(12)").removeClass("hide");

			$("#tablecontentfullview .marketdpeth td:nth-child(11)").removeClass("hide");
			$("#tablecontentfullview .marketdpeth td:nth-child(12)").removeClass("hide");

			$("#tablecontentfullview .depthcolspan").attr("colspan",parseInt(colspan) + 2);

  		}
  	}
  	else if(currentCol.innerHTML == "Duration")
  	{
  		if(target.className.search("colhideshow valset") != -1)
  		{//currently display, so turn them off

  			target.innerHTML = "&#161;";
			target.className = 'colhideshow valnot';
			DurColState = "hidden";

			$("#hookforrightclick th:nth-child(13)").addClass("hide"); 
			$("#hookforrightclick th:nth-child(14)").addClass("hide"); 

			$("#tablecontentfullview td:nth-child(13),#tablecontentfullview th:nth-child(13)").addClass("hide"); 
			$("#tablecontentfullview td:nth-child(14),#tablecontentfullview th:nth-child(14)").addClass("hide");

			$("#tablecontentfullview .marketdpeth td:nth-child(13)").addClass("hide");
			$("#tablecontentfullview .marketdpeth td:nth-child(14)").addClass("hide");

			$("#tablecontentfullview .depthcolspan").attr("colspan",parseInt(colspan) - 2);
  		}
  		else
  		{
  			target.innerHTML = "&#108;";
			target.className = 'colhideshow valset';
			DurColState = "visible";

			$("#hookforrightclick th:nth-child(13)").removeClass("hide"); 
			$("#hookforrightclick th:nth-child(14)").removeClass("hide"); 

  			$("#tablecontentfullview td:nth-child(13),#tablecontentfullview th:nth-child(13)").removeClass("hide"); 
			$("#tablecontentfullview td:nth-child(14),#tablecontentfullview th:nth-child(14)").removeClass("hide");

			$("#tablecontentfullview .marketdpeth td:nth-child(13)").removeClass("hide");
			$("#tablecontentfullview .marketdpeth td:nth-child(14)").removeClass("hide");

			$("#tablecontentfullview .depthcolspan").attr("colspan",parseInt(colspan) + 2);
  		}
  	}
  	else if(currentCol.innerHTML == "Z-Spread")
  	{
  		if(target.className.search("colhideshow valset") != -1)
  		{//currently display, so turn them off

  			target.innerHTML = "&#161;";
			target.className = 'colhideshow valnot';
			ZSprdColState = "hidden";

			$("#hookforrightclick th:nth-child(15)").addClass("hide"); 
			$("#hookforrightclick th:nth-child(16)").addClass("hide"); 

			$("#tablecontentfullview td:nth-child(15),#tablecontentfullview th:nth-child(15)").addClass("hide"); 
			$("#tablecontentfullview td:nth-child(16),#tablecontentfullview th:nth-child(16)").addClass("hide");

			$("#tablecontentfullview .marketdpeth td:nth-child(15)").addClass("hide");
			$("#tablecontentfullview .marketdpeth td:nth-child(16)").addClass("hide");

			$("#tablecontentfullview .depthcolspan").attr("colspan",parseInt(colspan) - 2);
  		}
  		else
  		{
  			target.innerHTML = "&#108;";
			target.className = 'colhideshow valset';
			ZSprdColState = "visible";

			$("#hookforrightclick th:nth-child(15)").removeClass("hide"); 
			$("#hookforrightclick th:nth-child(16)").removeClass("hide"); 

  			$("#tablecontentfullview td:nth-child(15),#tablecontentfullview th:nth-child(15)").removeClass("hide"); 
			$("#tablecontentfullview td:nth-child(16),#tablecontentfullview th:nth-child(16)").removeClass("hide");

			$("#tablecontentfullview .marketdpeth td:nth-child(15)").removeClass("hide");
			$("#tablecontentfullview .marketdpeth td:nth-child(16)").removeClass("hide");

			$("#tablecontentfullview .depthcolspan").attr("colspan",parseInt(colspan) + 2);
  		}
  	}
  	setTimeout("hideRightClickMenu()",100);

  	//deal with ie8 bug http://goo.gl/JRIcC
	document.getElementById("tablecontentfullview").style.display = "none";
	window.setTimeout(function() {document.getElementById("tablecontentfullview").style.display = "";},0);

	document.getElementById("fixedheader").style.display = "none";
	window.setTimeout(function() {document.getElementById("fixedheader").style.display = "";},0);

	// document.getElementById("application").style.display = "none";
	// window.setTimeout(function() {document.getElementById("application").style.display = "";},0);

       
}


// ----------------- Table Header Right Click Menu END  ------------------------------------









// ----------------- Bond DrillDown Popup START  ------------------------------------

function loadPopup()
{  
	//loads popup only if it is disabled  
	if(popupStatus==0)
	{  

		$("#backgroundPopup").css({ "opacity": "0.5" });  
		$("#backgroundPopup").show();  

		
			$("#poptstableholder").css(
			{ 
			 	width:400,
			 	height:268					
			})

		$("#poptsnano").nanoScroller();
		$("#applicationPopUp").show(); 
		popupStatus = 1; 
	}
}	
	
//centering popup  
function centerPopup()
{  
	//request data for centering  

	var windowWidth  = document.documentElement.clientWidth;  
	var windowHeight = document.documentElement.clientHeight;  
	var popupHeight  = $("#applicationPopUp").height();  
	var popupWidth   = $("#applicationPopUp").width();  
	
	//centering  applicationPopUp
	$("#applicationPopUp").css( 
	{  
		"position": "absolute",  
		"top": windowHeight/2-popupHeight/2,  
		"left": windowWidth/2-popupWidth/2  
	});  
	//only need force for IE6  
	  
	$("#backgroundPopup").css(
	{  
		"height": windowHeight  
	});  
  
}  
function disablePopup()
{  
	//disables popup only if it is enabled  
	if(popupStatus==1)
	{  

		cache = {};

		$("#backgroundPopup").hide();  
		$("#applicationPopUp").hide();
		popupStatus = 0;  
		
		//refBook.popupClosed();	
		//alert("Call VBA function to stop updates for: " + popupBondID);
		
		popupBondID = "";
		hideHKDropDown();
	}  
} 
function _launchPopup(pBondPopup)
{

	hideRightClickMenu();
	cache = {};

	var bondIdArray = pBondPopup.split(";");
	popupBondID 	= bondIdArray[0];
	document.getElementById("popuplabel").innerHTML = bondIdArray[1];	
	
	//alert("Call functions: _1tradeUpdatePopup(), _dataUpdatePopup() and _depthUpdatePopup() to start realtime data for: " + bondIdArray[0]);	

	//create bbo row
	var rowTemplate = [];
	var k 			= 0;
	rowTemplate[k++] = '<table><tr>';
	rowTemplate[k++] = '<td id="BRKBID">&nbsp;</td>';
	rowTemplate[k++] = '<td id="SZBID" rowspan="2">&nbsp;</td>';
	rowTemplate[k++] = '<td id="BID" rowspan="2">&nbsp;</td>';
	rowTemplate[k++] = '<td id="dash" width="10px" rowspan="2">-</td>';
	rowTemplate[k++] = '<td id="ASK" rowspan="2">&nbsp;</td>';
	rowTemplate[k++] = '<td id="SZASK" rowspan="2">&nbsp;</td>';
	rowTemplate[k++] = '<td id="BRKASK">&nbsp;</td></tr>';
	rowTemplate[k++] = '<tr><td id="TIMBID">&nbsp;</td>';
	rowTemplate[k++] = '<td id="TIMASK">&nbsp;</td></tr></table>';

	rowTemplate = rowTemplate.join("");

	document.getElementById("popTopRowContainer").innerHTML = rowTemplate;

	//create depth table
	rowTemplate = [];
	var k 			= 0;
	rowTemplate[k++] = '<table class="quotes"><thead><tr><th>Time</th><th>C</th><th>Size</th><th>Bid</th><th>Ask</th><th>Size</th><th>C</th><th>Time</th></tr></thead>';
	rowTemplate[k++] = '<col width=30><col width=20><col width=30><col width=80><col width=80><col width=30><col width=20><col width=30>';
	rowTemplate[k++] = '<tr class="odd"><TD id="TIMBID1" class="time">&nbsp;</TD><TD id="BRKBID1" class="brokers">&nbsp;</TD><TD id="SZBID1" class="size">&nbsp;</TD><TD id="BID1" class="bid">&nbsp;</TD><TD id="ASK1" class="ask">&nbsp;</TD><TD id="SZASK1" class="size">&nbsp;</TD><TD id="BRKASK1" class="brokers">&nbsp;</TD><TD id="TIMASK1" class="time">&nbsp;</TD></tr>';
	rowTemplate[k++] = '<tr class="even"><TD id="TIMBID2" class="time">&nbsp;</TD><TD id="BRKBID2" class="brokers">&nbsp;</TD><TD id="SZBID2" class="size">&nbsp;</TD><TD id="BID2" class="bid">&nbsp;</TD><TD id="ASK2" class="ask">&nbsp;</TD><TD id="SZASK2" class="size">&nbsp;</TD><TD id="BRKASK2" class="brokers">&nbsp;</TD><TD id="TIMASK2" class="time">&nbsp;</TD></tr>';
	rowTemplate[k++] = '<tr class="odd"><TD id="TIMBID3" class="time">&nbsp;</TD><TD id="BRKBID3" class="brokers">&nbsp;</TD><TD id="SZBID3" class="size">&nbsp;</TD><TD id="BID3" class="bid">&nbsp;</TD><TD id="ASK3" class="ask">&nbsp;</TD><TD id="SZASK3" class="size">&nbsp;</TD><TD id="BRKASK3" class="brokers">&nbsp;</TD><TD id="TIMASK3" class="time">&nbsp;</TD></tr>';
	rowTemplate[k++] = '<tr class="even"><TD id="TIMBID4" class="time">&nbsp;</TD><TD id="BRKBID4" class="brokers">&nbsp;</TD><TD id="SZBID4" class="size">&nbsp;</TD><TD id="BID4" class="bid">&nbsp;</TD><TD id="ASK4" class="ask">&nbsp;</TD><TD id="SZASK4" class="size">&nbsp;</TD><TD id="BRKASK4" class="brokers">&nbsp;</TD><TD id="TIMASK4" class="time">&nbsp;</TD></tr>';
	rowTemplate[k++] = '<tr class="odd"><TD id="TIMBID5" class="time">&nbsp;</TD><TD id="BRKBID5" class="brokers">&nbsp;</TD><TD id="SZBID5" class="size">&nbsp;</TD><TD id="BID5" class="bid">&nbsp;</TD><TD id="ASK5" class="ask">&nbsp;</TD><TD id="SZASK5" class="size">&nbsp;</TD><TD id="BRKASK5" class="brokers">&nbsp;</TD><TD id="TIMASK5" class="time">&nbsp;</TD></tr></table>';
	rowTemplate = rowTemplate.join("");

	document.getElementById("popMD").innerHTML = rowTemplate;

	//create trades table
	rowTemplate 		= [];
	var k 			= 0;
	rowTemplate[k++] = '<table id="popTSTable" class="quotes"><thead><tr><th>Time</th><th>C</th><th>Px</th><th>Size</th><th>Dir.</th></tr></thead>';
	rowTemplate[k++] = '<col width=30><col width=20><col width=60><col width=50><col width=30><tbody><tr></tr></tbody></table>';
	rowTemplate = rowTemplate.join("");
	document.getElementById("poptstableholder").innerHTML = rowTemplate;

	
	centerPopup();
	loadPopup();

}

	
	
function toggleHotKeyDropDown()
{
	var elem = document.getElementById("hotkeydropdown");
	if(elem.className == "hideme")
	{
		var $hklist = $("#hotkeydropdown");

		//clear the hot key drop down, because it should behave like a radio button
		$hklist.find(".hkdot").each(function(index)
		{ //do radio button functionality					
			$(this).html("&#161;");	
			$(this).attr("class", "hkdot hkfavnot");
		});	

		//show the hotkey dropdown
		elem.className = "";
	}
	else
		elem.className = "hideme";
		
	//var menucloser = document.getElementById("menucloser");
	//menucloser.className = "bringtofront";
}


/*
	Bond PopUp drop down for hot key assignment
*/
function selectHotKey(target)
{

	target.innerHTML = '&#108;';
	target.className = 'hkdot hkfavsel';

	var symbolname = document.getElementById("popuplabel").innerHTML;
	
	if(target.id == "hk1")
	{
		document.getElementById("button1").innerHTML = symbolname;
		hotkey1SymbolAndName = popupBondID + ";" + symbolname;
	//	refBook.saveHotKey("button1",popupBondID);
		// alert("Call VBA function to save: " + "button1" + " as hotkey for: " + popupBondID);
	}
	else if(target.id == "hk2")
	{
		document.getElementById("button2").innerHTML = symbolname;
		hotkey2SymbolAndName = popupBondID + ";" + symbolname;	
	//	refBook.saveHotKey("button2",popupBondID);
		// alert("Call VBA function to save: " + "button2" + " as hotkey for: " + popupBondID);

	}
	else if(target.id == "hk3")
	{
		document.getElementById("button3").innerHTML = symbolname;
		hotkey3SymbolAndName = popupBondID + ";" + symbolname;	
	//	refBook.saveHotKey("button3",popupBondID);
		// alert("Call VBA function to save: " + "button3" + " as hotkey for: " + popupBondID);

	}
	else if(target.id == "hk4")
	{
		document.getElementById("button4").innerHTML = symbolname;
		hotkey4SymbolAndName = popupBondID + ";" + symbolname;	
	//	refBook.saveHotKey("button4",popupBondID);
		// alert("Call VBA function to save: " + "button4" + " as hotkey for: " + popupBondID);

	}
	else if(target.id == "hk5")
	{
		document.getElementById("button5").innerHTML = symbolname;
		hotkey5SymbolAndName = popupBondID + ";" + symbolname;	
	//	refBook.saveHotKey("button5",popupBondID);
		// alert("Call VBA function to save: " + "button5" + " as hotkey for: " + popupBondID);
	}

	window.setTimeout(function(){document.getElementById("hotkeydropdown").className = "hideme"},200);
}
function hideHKDropDown()
{
	document.getElementById("hotkeydropdown").className = "hideme";
}
// ----------------- Bond DrillDown Popup END ------------------------------------




// ---------------------- Hot key configuration START ---------------------------

function _setHotKeyConfig(key,symbolid, symbolname)
{
	if(key == "1")
	{	
		hotkey1SymbolAndName = symbolid + ";" + symbolname;
		document.getElementById("button1").innerHTML = symbolname;
		return;
	}
	else if(key == "2")
	{	
		hotkey2SymbolAndName = symbolid + ";" + symbolname;
		document.getElementById("button2").innerHTML = symbolname;
		return;
	}
	else if(key == "3")
	{	
		hotkey3SymbolAndName = symbolid + ";" + symbolname;
		document.getElementById("button3").innerHTML = symbolname;
		return;
	}	
	else if(key == "4")
	{	
		hotkey4SymbolAndName = symbolid + ";" + symbolname;
		document.getElementById("button4").innerHTML = symbolname;
		return;
	}
	else if(key == "5")
	{	
		hotkey5SymbolAndName = symbolid + ";" + symbolname;
		document.getElementById("button5").innerHTML = symbolname;
		return;
	}
}

// ---------------------- Hot key configuration END ---------------------------





// ------------------------------- Floating Broker Pages START --------------------------------
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
	//deactivate nanoscroller, otherwise trades/depth popup is scrollable
	$("#application .nano").nanoScroller({stop:true});
	handleNanoScrollerEventBug();

	document.getElementById("tradesrawdatatoggle").innerHTML = "";

	var $brokerpagetable 	= $(document.getElementById("brokerpagetable"));
	var $brokerarrowtop  	= $(document.getElementById("brokerarrowtop"));
	var $brokerarrowbottom 	= $(document.getElementById("brokerarrowbottom"));

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


// ------------------------------- Floating Broker Pages END --------------------------------







// ------------------------------ Right Click Menu START ------------------------------------
function showRightClickMenu(target)
{
	hideRightClickMenu();
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
function createRightClickMenu(pbmlist,pdefaultbm,psymbol,pmylists)
{
	var sHtml     = ""

	//construct benchmark portion of the right click menu
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
				list1 = list1 + '<tr><td class="label">Portfolio1 1</td><td class="mylist valset">&#108;</td></tr>';
			}
			if(myLists[j] == "Portfolio2")
			{
				list2 = list2 + '<tr><td class="label">Portfolio1 2</td><td class="mylist valset">&#108;</td></tr>';
			}
			if(myLists[j] == "Portfolio3")
			{
				list3 = list3 + '<tr><td class="label">Portfolio1 3</td><td class="mylist valset">&#108;</td></tr>';
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
		list3 = list3 + '<tr><td class="label">Portfolio 3</td><td class="mylist valnot">&#161;</td></tr>';				
	}
	if(list4 =="")
	{
		list4 = list4 + '<tr><td class="label">Portfolio 4</td><td class="mylist valnot">&#161;</td></tr>';				
	}
	if(list5 =="")
	{
		list5 = list5 + '<tr><td class="label last">Portfolio 5</td><td class="mylist valnot last">&#161;</td></tr>';				
	}

	sHtml = sHtml + list1 + list2 + list3 + list4 + list5;

	$("#rightclicktable").append(sHtml);

	//sets the bondid against which the menu was triggered inside the right click menu markup
	document.getElementById("rightclicktable").setAttribute("bondID", psymbol);

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
			//this regex is important because the mylist attribute must store mylist="Portfolio11" NOT mylist="Portfolio1 1"
			var listval = $(target).siblings(".label").text().replace(/\s/g, "");
			symbolMainTableRow.setAttribute("mylists", listval);
			//alert("Call VBA function to add: "+ symbol + " to "+ listval)
		}
		else
		{//this regex is important because the mylist attribute must store mylist="Portfolio11" NOT mylist="Portfolio1 1"
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
	//hideRightClickMenu();
	setTimeout("hideRightClickMenu()",100);
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

	hideRightClickMenu();
}

function hideRightClickMenu()
{

	if(rawDataShowing == true)
	{
		document.getElementById("brokerpagetable").className = "hideme";
		document.getElementById("brokerarrowtop").className = "hideme";
		document.getElementById("brokerarrowbottom").className = "hideme";
		rawDataShowing = false;
		//refPricer.stopRawData();
	}

	var elem = document.getElementById("mylistsdropdown");
	if(elem.className != "hideme")
		elem.className = "hideme";


	$('#rightclickmenu').hide();
	$("#rightclicktable").empty();
	document.getElementById("menucloser").className = "sendtoback";

	//reset nanoscroller by bringing back to front for highlighting and resetting
	$("#application .nano").css("z-index","auto");
	$("#application .nano").nanoScroller();
}
// ----------------- Right Click Menu END  ------------------------------------


// ----------------- BROKER TABS Start ---------------------------------
// function togglebrokerTab(target)
// {
// 	if(target.id == "BRK1tabs")
// 	{
// 		document.getElementById("clickBRK1").className = "tablinkcontainer active";
// 		document.getElementById("clickBRK2").className = "tablinkcontainer";
// 		document.getElementById("clickBRK3").className = "tablinkcontainer";
// 		document.getElementById("clickBRK4").className = "tablinkcontainer";
// 		document.getElementById("clickBRK5").className = "tablinkcontainer";

// 		document.getElementById("BRK1tabs").className = "tablink";
// 		document.getElementById("BRK2tabs").className = "tablink hover";
// 		document.getElementById("BRK3tabs").className = "tablink hover";
// 		document.getElementById("BRK4tabs").className = "tablink hover";
// 		document.getElementById("BRK5tabs").className = "tablink hover";

// 		$("#tablecontentbrokerview").empty();
// 		initialiseEikonWindowTable(crudeAndNamesAndAggregateAndDepth,"Crude","brokerview");
// 	}
// 	else if (target.id =="BRK2tabs")
// 	{

// 		document.getElementById("clickBRK1").className = "tablinkcontainer";
// 		document.getElementById("clickBRK2").className = "tablinkcontainer active";
// 		document.getElementById("clickBRK3").className = "tablinkcontainer";
// 		document.getElementById("clickBRK4").className = "tablinkcontainer";
// 		document.getElementById("clickBRK5").className = "tablinkcontainer";

// 		document.getElementById("BRK1tabs").className = "tablink hover";
// 		document.getElementById("BRK2tabs").className = "tablink";
// 		document.getElementById("BRK3tabs").className = "tablink hover";
// 		document.getElementById("BRK4tabs").className = "tablink hover";
// 		document.getElementById("BRK5tabs").className = "tablink hover";

// 		$("#tablecontentbrokerview").empty();
// 		initialiseEikonWindowTable(crudeAndNamesAndAggregateAndDepth,"Crude","brokerview");
// 	}
// 	else if (target.id =="BRK3tabs")
// 	{
// 		document.getElementById("clickBRK1").className = "tablinkcontainer";
// 		document.getElementById("clickBRK2").className = "tablinkcontainer";
// 		document.getElementById("clickBRK3").className = "tablinkcontainer active";
// 		document.getElementById("clickBRK4").className = "tablinkcontainer";
// 		document.getElementById("clickBRK5").className = "tablinkcontainer";

// 		document.getElementById("BRK1tabs").className = "tablink hover";
// 		document.getElementById("BRK2tabs").className = "tablink hover";
// 		document.getElementById("BRK3tabs").className = "tablink";
// 		document.getElementById("BRK4tabs").className = "tablink hover";
// 		document.getElementById("BRK5tabs").className = "tablink hover";

// 		$("#tablecontentbrokerview").empty();
// 	}
// 	else if (target.id =="BRK4tabs")
// 	{
// 		document.getElementById("clickBRK1").className = "tablinkcontainer";
// 		document.getElementById("clickBRK2").className = "tablinkcontainer";
// 		document.getElementById("clickBRK3").className = "tablinkcontainer";
// 		document.getElementById("clickBRK4").className = "tablinkcontainer active";
// 		document.getElementById("clickBRK5").className = "tablinkcontainer";

// 		document.getElementById("BRK1tabs").className = "tablink hover";
// 		document.getElementById("BRK2tabs").className = "tablink hover";
// 		document.getElementById("BRK3tabs").className = "tablink hover";
// 		document.getElementById("BRK4tabs").className = "tablink";
// 		document.getElementById("BRK5tabs").className = "tablink hover";

// 		$("#tablecontentbrokerview").empty();
// 	}
// 	else if (target.id =="BRK5tabs")
// 	{
// 		document.getElementById("clickBRK1").className = "tablinkcontainer";
// 		document.getElementById("clickBRK2").className = "tablinkcontainer";
// 		document.getElementById("clickBRK3").className = "tablinkcontainer";
// 		document.getElementById("clickBRK4").className = "tablinkcontainer";
// 		document.getElementById("clickBRK5").className = "tablinkcontainer active";

// 		document.getElementById("BRK1tabs").className = "tablink hover";
// 		document.getElementById("BRK2tabs").className = "tablink hover";
// 		document.getElementById("BRK3tabs").className = "tablink hover";
// 		document.getElementById("BRK4tabs").className = "tablink hover";
// 		document.getElementById("BRK5tabs").className = "tablink";		

// 		$("#tablecontentbrokerview").empty();
// 	}
// }

// ----------------- BROKER TABS Start ---------------------------------


// ----------------- COUNTRY TABS Start ---------------------------------
// function togglecountryTab(target)
// {
	
// 	if(target.id == "EUtabs-1")
// 	{
// 		document.getElementById("canvas_containerMIDEAST").className = "canvas hide";
// 		document.getElementById("canvas_containerLATAM").className = "canvas hide";
// 		document.getElementById("canvas_containerEU").className = "canvas";
// 		document.getElementById("canvas_containerAFRICA").className = "canvas hide";
// 		document.getElementById("canvas_containerCENASIA").className = "canvas hide";

// 		document.getElementById("clickEurope").className = "tablinkcontainer active";
// 		document.getElementById("clickLatam").className = "tablinkcontainer";
// 		document.getElementById("clickmideast").className = "tablinkcontainer";
// 		document.getElementById("clickafrica").className = "tablinkcontainer";
// 		document.getElementById("clickcentralasia").className = "tablinkcontainer";


// 		document.getElementById("EUtabs-1").className = "tablink";
// 		document.getElementById("LATAMtabs-1").className = "tablink hover";
// 		document.getElementById("MIDEASTtabs-1").className = "tablink hover";
// 		document.getElementById("AFRICAtabs-1").className = "tablink hover";
// 		document.getElementById("CENASIAtabs-1").className = "tablink hover";

// 		document.getElementById("countryinfolabel").innerHTML ="EUROPE"
		
// 	}
// 	else if(target.id == "LATAMtabs-1")
// 	{
// 		document.getElementById("canvas_containerMIDEAST").className = "canvas hide";
// 		document.getElementById("canvas_containerLATAM").className = "canvas";
// 		document.getElementById("canvas_containerEU").className = "canvas hide";
// 		document.getElementById("canvas_containerAFRICA").className = "canvas hide";
// 		document.getElementById("canvas_containerCENASIA").className = "canvas hide";
		
// 		document.getElementById("clickEurope").className = "tablinkcontainer";
// 		document.getElementById("clickLatam").className = "tablinkcontainer active";
// 		document.getElementById("clickmideast").className = "tablinkcontainer";
// 		document.getElementById("clickafrica").className = "tablinkcontainer";
// 		document.getElementById("clickcentralasia").className = "tablinkcontainer";
		
// 		document.getElementById("EUtabs-1").className = "tablink hover";
// 		document.getElementById("LATAMtabs-1").className = "tablink";
// 		document.getElementById("MIDEASTtabs-1").className = "tablink hover";
// 		document.getElementById("AFRICAtabs-1").className = "tablink hover";
// 		document.getElementById("CENASIAtabs-1").className = "tablink hover";

// 		document.getElementById("countryinfolabel").innerHTML ="LATIN AMERICA"
// 	}
// 	else if(target.id == "MIDEASTtabs-1")
// 	{
// 		document.getElementById("canvas_containerMIDEAST").className = "canvas";
// 		document.getElementById("canvas_containerLATAM").className = "canvas hide";
// 		document.getElementById("canvas_containerEU").className = "canvas hide";
// 		document.getElementById("canvas_containerAFRICA").className = "canvas hide";
// 		document.getElementById("canvas_containerCENASIA").className = "canvas hide";

// 		document.getElementById("clickEurope").className = "tablinkcontainer";
// 		document.getElementById("clickLatam").className = "tablinkcontainer";
// 		document.getElementById("clickmideast").className = "tablinkcontainer active";		
// 		document.getElementById("clickafrica").className = "tablinkcontainer";
// 		document.getElementById("clickcentralasia").className = "tablinkcontainer";

// 		document.getElementById("EUtabs-1").className = "tablink hover";
// 		document.getElementById("LATAMtabs-1").className = "tablink hover";
// 		document.getElementById("MIDEASTtabs-1").className = "tablink";
// 		document.getElementById("AFRICAtabs-1").className = "tablink hover";
// 		document.getElementById("CENASIAtabs-1").className = "tablink hover";

// 		document.getElementById("countryinfolabel").innerHTML ="MIDDLE EAST"
// 	}
// 	else if(target.id == "AFRICAtabs-1")
// 	{
// 		document.getElementById("canvas_containerMIDEAST").className = "canvas hide";
// 		document.getElementById("canvas_containerLATAM").className = "canvas hide";
// 		document.getElementById("canvas_containerEU").className = "canvas hide";
// 		document.getElementById("canvas_containerAFRICA").className = "canvas";
// 		document.getElementById("canvas_containerCENASIA").className = "canvas hide";

// 		document.getElementById("clickEurope").className = "tablinkcontainer";
// 		document.getElementById("clickLatam").className = "tablinkcontainer";
// 		document.getElementById("clickmideast").className = "tablinkcontainer";		
// 		document.getElementById("clickafrica").className = "tablinkcontainer active";
// 		document.getElementById("clickcentralasia").className = "tablinkcontainer";

// 		document.getElementById("EUtabs-1").className = "tablink hover";
// 		document.getElementById("LATAMtabs-1").className = "tablink hover";
// 		document.getElementById("MIDEASTtabs-1").className = "tablink hover";
// 		document.getElementById("AFRICAtabs-1").className = "tablink";
// 		document.getElementById("CENASIAtabs-1").className = "tablink hover";


// 		document.getElementById("countryinfolabel").innerHTML ="AFRICA"
// 	}
// 	else if(target.id == "CENASIAtabs-1")
// 	{
// 		document.getElementById("canvas_containerMIDEAST").className = "canvas hide";
// 		document.getElementById("canvas_containerLATAM").className = "canvas hide";
// 		document.getElementById("canvas_containerEU").className = "canvas hide";
// 		document.getElementById("canvas_containerAFRICA").className = "canvas hide";
// 		document.getElementById("canvas_containerCENASIA").className = "canvas";

// 		document.getElementById("clickEurope").className = "tablinkcontainer";
// 		document.getElementById("clickLatam").className = "tablinkcontainer";
// 		document.getElementById("clickmideast").className = "tablinkcontainer";		
// 		document.getElementById("clickafrica").className = "tablinkcontainer";
// 		document.getElementById("clickcentralasia").className = "tablinkcontainer active";

// 		document.getElementById("EUtabs-1").className = "tablink hover";
// 		document.getElementById("LATAMtabs-1").className = "tablink hover";
// 		document.getElementById("MIDEASTtabs-1").className = "tablink hover";
// 		document.getElementById("AFRICAtabs-1").className = "tablink hover";
// 		document.getElementById("CENASIAtabs-1").className = "tablink";


// 		document.getElementById("countryinfolabel").innerHTML ="CENTRAL ASIA"
// 	}
// }
// ----------------- COUNTRY TABS End ---------------------------------

// ----------------- Main Tabs Start -----------------------------------

// function _getActiveTab()
// {
// 	return $("#application .tabs").find(".active").text();
// }

function _setActiveTab(tab)
{
	var x = {};
	if(tab == "1")
	{
		x.id = "tabs-1";
		toggleMainTab(x);		
	}
	else if(tab == "2")
	{
		x.id = "tabs-2";
		toggleMainTab(x);
	}
	else if(tab == "3")
	{
		x.id = "tabs-3";
		toggleMainTab(x);
	}
	else if(tab == "4")
	{
		x.id = "tabs-4";
		toggleMainTab(x);
	}
}

function toggleMainTab(target)
{

	if(target.id == "tabs-1") 
	{
		document.getElementById("tabs-1-1").className = "tabcontent";
		document.getElementById("tabs-2-1").className = "tabcontent hide";
		//document.getElementById("tabs-3-1").className = "tabcontent hide";
		//document.getElementById("tabs-4-1").className = "tabcontent hide";

		document.getElementById("tablinkcontainer-1").className = "tablinkcontainer active";
		document.getElementById("tablinkcontainer-2").className = "tablinkcontainer";
		//document.getElementById("tablinkcontainer-3").className = "tablinkcontainer";
		//document.getElementById("tablinkcontainer-4").className = "tablinkcontainer";

		document.getElementById("tabs-1").className = "tablink";
		document.getElementById("tabs-2").className = "tablink hover";
		//document.getElementById("tabs-3").className = "tablink hover";
		//document.getElementById("tabs-4").className = "tablink hover";

		//refBook.StopUpdates();
		//refBook.tabActivated("1");
		//document.getElementById("tablecontentfullview").innerHTML = "";
		//document.getElementById("tablecontentbrokerview").innerHTML = "";

	}
	else if(target.id == "tabs-2") 
	{
		document.getElementById("tabs-1-1").className = "tabcontent hide";
		document.getElementById("tabs-2-1").className = "tabcontent";
		//document.getElementById("tabs-3-1").className = "tabcontent hide";
		//document.getElementById("tabs-4-1").className = "tabcontent hide";

		document.getElementById("tablinkcontainer-1").className = "tablinkcontainer";
		document.getElementById("tablinkcontainer-2").className = "tablinkcontainer active";
		//document.getElementById("tablinkcontainer-3").className = "tablinkcontainer";
		//document.getElementById("tablinkcontainer-4").className = "tablinkcontainer";

		document.getElementById("tabs-1").className = "tablink hover";
		document.getElementById("tabs-2").className = "tablink";
		//document.getElementById("tabs-3").className = "tablink hover";
		//document.getElementById("tabs-4").className = "tablink hover";
		
		//refBook.StopUpdates();
		//refBook.tabActivated("2");
		//document.getElementById("tablecontentfullview").innerHTML = "";
		//document.getElementById("tablecontentbrokerview").innerHTML = "";


	}
	// else if(target.id == "tabs-3") 
	// {
	// 	document.getElementById("tabs-1-1").className = "tabcontent hide";
	// 	document.getElementById("tabs-2-1").className = "tabcontent hide";
	// 	document.getElementById("tabs-3-1").className = "tabcontent";
	// 	// document.getElementById("tabs-4-1").className = "tabcontent hide";

	// 	document.getElementById("tablinkcontainer-1").className = "tablinkcontainer";
	// 	document.getElementById("tablinkcontainer-2").className = "tablinkcontainer";
	// 	document.getElementById("tablinkcontainer-3").className = "tablinkcontainer active";
	// 	// document.getElementById("tablinkcontainer-4").className = "tablinkcontainer";

	// 	document.getElementById("tabs-1").className = "tablink hover";
	// 	document.getElementById("tabs-2").className = "tablink hover";
	// 	document.getElementById("tabs-3").className = "tablink";
	// 	// document.getElementById("tabs-4").className = "tablink hover";

	// 	document.getElementById("tablecontentfullview").innerHTML = "";		 
	// 	//refBook.StartUpdates();
	// 	//document.getElementById("tablecontentbrokerview").innerHTML = "";
	// 	//$("#tablecontentbrokerview").empty();
	// 	//resetNanoWindowSize();

	// }
	// else if(target.id == "tabs-4") //BROKERVIEW
	// {
	// 	document.getElementById("tabs-1-1").className = "tabcontent hide";
	// 	document.getElementById("tabs-2-1").className = "tabcontent hide";
	// 	document.getElementById("tabs-3-1").className = "tabcontent hide";
	// 	document.getElementById("tabs-4-1").className = "tabcontent";

	// 	document.getElementById("tablinkcontainer-1").className = "tablinkcontainer";
	// 	document.getElementById("tablinkcontainer-2").className = "tablinkcontainer";
	// 	document.getElementById("tablinkcontainer-3").className = "tablinkcontainer";
	// 	document.getElementById("tablinkcontainer-4").className = "tablinkcontainer active";

	// 	document.getElementById("tabs-1").className = "tablink hover";
	// 	document.getElementById("tabs-2").className = "tablink hover";
	// 	document.getElementById("tabs-3").className = "tablink hover";
	// 	document.getElementById("tabs-4").className = "tablink";

	// 	 resetNanoWindowSize();
	// 	//refBook.StopUpdates();
	// 	//document.getElementById("tablecontentfullview").innerHTML = "";  
	// 	$("#tablecontentfullview").empty();
	// 	_setListLabel("");
	// }
}

// ----------------- Main Tabs End -----------------------------------














// ----------------- Table Update Start ------------------------------------

//px = "uniqueidPXBID1;66.66" or "uniqueidPXASK1;66.66" 
//sz = "uniqueidSZBID1;123" or "uniqueidSZASK1;123"
//brk = "uniqueidBRKBID1;GT"
//tim = "uniqueidTIMBID1;14:50"
function _dataUpdate(px,sz,brk,tim)
{
	var localCache = cache; 

	var biddy = px.split(";");

	if(!localCache[biddy[0]])
		localCache[biddy[0]] = document.getElementById(biddy[0]);

	localCache[biddy[0]].innerHTML = biddy[1];


	var sizey = sz.split(";");

	if(!localCache[sizey[0]])
		localCache[sizey[0]] = document.getElementById(sizey[0]);

	localCache[sizey[0]].innerHTML = sizey[1];


	var brky = brk.split(";");

	if(!localCache[brky[0]])
		localCache[brky[0]] = document.getElementById(brky[0]);

	//localCache[brky[0]].innerHTML = brky[1];
	//clickable broker codes
	var brklen  = brky[1].length;
	var brkcdes = brky[1];
	var brkhtml = '<span symid="#id" class="brkclick">#brk</span>';
	var brkouput ="";
	for(var i=0;i<brklen;i++)
	{
		//parse out the symbold id and place into the dom for retrieval later when the user request the raw broker pages
		brkouput = brkouput + brkhtml.replace("#brk", brkcdes[i]).replace("#id", brky[0].substring(0,9));
	}

	localCache[brky[0]].innerHTML = brkouput;



	var timey = tim.split(";");

	if(!localCache[timey[0]])
		localCache[timey[0]] = document.getElementById(timey[0]);

	localCache[timey[0]].innerHTML = timey[1];


	if(localCache[biddy[0]].className.substring(0,3) == "ask")
	{
		localCache[biddy[0]].className = "ask flash";
		localCache[sizey[0]].className = "size flash";
		localCache[brky[0]].className  = "brokers flash";
		localCache[timey[0]].className = "time flash";
		window.setTimeout(function()
		{
			if(localCache[biddy[0]].className .search("expired") == -1)
			{//don't reactivate the default white colour if the instrument/quote has been expired
				localCache[biddy[0]].className = "ask";
				localCache[sizey[0]].className = "size";
				localCache[brky[0]].className  = "brokers";
				localCache[timey[0]].className = "time";
			}
		}, 5000)
	}
	else
	{
		localCache[biddy[0]].className = "bid flash"
		localCache[sizey[0]].className = "size flash";
		localCache[brky[0]].className  = "brokers flash";
		localCache[timey[0]].className = "time flash";

		window.setTimeout(function()
		{
			if(localCache[biddy[0]].className .search("expired") == -1)
			{//don't reactivate the default white colour if the instrument/quote has been expired
		
				localCache[biddy[0]].className = "bid";
				localCache[sizey[0]].className = "size";
				localCache[brky[0]].className  = "brokers";
				localCache[timey[0]].className = "time";
			}
		}, 5000)		
	}

}

// "CLX99TRDS;14:00 T 101 5 hit"
function _tradeUpdate(trade)
{
	var localCache = cache; 

	var trd = trade.split(";")

	if(!localCache[trd[0]])
		localCache[trd[0]] = document.getElementById(trd[0]);

	localCache[trd[0]].innerHTML = trd[1];

	localCache[trd[0]].className = "trades flash";
	window.setTimeout(function(){localCache[trd[0]].className = "trades";}, 5000)

}
// ----------------- Table Update END ------------------------------------

// ----------------- ANALYTICS UPDATE START ------------------------------
//_updateAnalytics("KFTOQYLDBID;123.22", "KFTOQDURBID;456.55", "KFTOQZSPBID;789.88");
//_updateAnalytics("KFTOQYLDASK;123.22", "KFTOQDURASK;456.55", "KFTOQZSPASK;789.88");
function _updateAnalytics(pyield, pzsprd, pdur)
{
	var localCache = cache; 
	
	var yield = pyield.split(";");

	if(!localCache[yield[0]])
		localCache[yield[0]] = document.getElementById(yield[0]);

	localCache[yield[0]].innerHTML = yield[1];

	var zsprd = pzsprd.split(";");

	if(!localCache[zsprd[0]])
		localCache[zsprd[0]] = document.getElementById(zsprd[0]);

	localCache[zsprd[0]].innerHTML = zsprd[1];

	var dur = pdur.split(";");

	if(!localCache[dur[0]])
		localCache[dur[0]] = document.getElementById(dur[0]);

	localCache[dur[0]].innerHTML = dur[1];


	if(localCache[yield[0]].className.substring(0,6) == "byield")
	{
		localCache[yield[0]].className = "byield flash";
		localCache[zsprd[0]].className = "bduration flash";
		localCache[dur[0]].className   = "bzspread flash";		
		window.setTimeout(function()
		{
			if(localCache[yield[0]].className .search("expired") == -1)
			{//don't reactivate the default white colour if the instrument/quote has been expired
				localCache[yield[0]].className = "byield";
				localCache[zsprd[0]].className = "bduration";
				localCache[dur[0]].className   = "bzspread";		
			}
		}, 5000)

	}
	else
	{

		localCache[yield[0]].className = "ayield flash";
		localCache[zsprd[0]].className = "aduration flash";
		localCache[dur[0]].className   = "azspread flash";		
		window.setTimeout(function()
		{
			if(localCache[yield[0]].className .search("expired") == -1)
			{//don't reactivate the default white colour if the instrument/quote has been expired
				localCache[yield[0]].className = "ayield";
				localCache[zsprd[0]].className = "aduration";
				localCache[dur[0]].className   = "azspread";		
			}
		}, 5000)		
	}

}

// -----------------  ANALYTICS UPDATE END -------------------------------










// ----------------- POPUP Update Start ------------------------------------


// _updateTradePopup("px","sz","brk","tim","dir");
function _tradeUpdatePopup(px,sz,brk,tim,dir)
{
	//alert("test");
	var rowTemplate = [];
	var k 			= 0;
	rowTemplate[k++] = '<tr class="#oddEven">';					//[0]
	rowTemplate[k++] = '<td class="time">#time</td>';			//[1]
	rowTemplate[k++] = '<td class="brokers">#brk</td>';			//[2]
	rowTemplate[k++] = '<td class="bid">#px</td>';				//[3]
	rowTemplate[k++] = '<td class="size">#sz</td>';				//[4]
	rowTemplate[k++] = '<td class="hittake">#dir</td></tr>';	//[5]
	
	var $firstRow = $("#popTSTable tbody tr:first");
	
	if ($firstRow[0].className == "even")
		rowTemplate[0] = rowTemplate[0].replace('#oddEven',"odd");
	else
		rowTemplate[0] = rowTemplate[0].replace('#oddEven',"even");	


	rowTemplate[1] = rowTemplate[1].replace('#time',tim);
	rowTemplate[2] = rowTemplate[2].replace('#brk',brk);
	rowTemplate[3] = rowTemplate[3].replace('#px',px);
	rowTemplate[4] = rowTemplate[4].replace('#sz',sz);
	rowTemplate[5] = rowTemplate[5].replace('#dir',dir);

	rowTemplate = rowTemplate.join("");
	
	$firstRow.before(rowTemplate);

	if (resetNanoScroller == true)  
	{//only reset the nanoscroller every 10 seconds. Each 10 seconds is triggered only off a new tradeupdate (approx.)
		resetNanoScroller = false;
		resetNanoOnTimer();		
	}

	//$("#popTS .nano").nanoScroller();

}
function resetNanoOnTimer()
{
	window.setTimeout(function(){$("#popTS .nano").nanoScroller();resetNanoScroller = true;},10000);	
}

//_dataUpdatePopup("BID;44.55", "SZBID;5", "BRKBID;GF", "TIMBID;14:00");
//_dataUpdatePopup("ASK;46.55", "SZASK;5", "BRKASK;GF", "TIMASK;14:00");
function _dataUpdatePopup(px, size, brk, time)
{
	var localCache 		= cache; 

	var bidpx = px.split(";");
	
	if(!localCache[bidpx[0]])
		localCache[bidpx[0]] = document.getElementById(bidpx[0]);

	localCache[bidpx[0]].innerHTML = bidpx[1];


	var bidbrokers = brk.split(";");

	if(!localCache[bidbrokers[0]])
		localCache[bidbrokers[0]] = document.getElementById(bidbrokers[0]);

	//localCache[bidbrokers[0]].innerHTML = bidbrokers[1];
	//clickable broker codes
	var brklen  = bidbrokers[1].length;
	var brkcdes = bidbrokers[1];
	var brkhtml = '<span symid="#id" class="brkclick">#brk</span>';
	var brkouput ="";
	for(var i=0;i<brklen;i++)
	{
		//using global popupBondId to identify the current symbolid because the ids are not passed into this function (only one symbol drill down show at anytime)
		//this is for when user clicks on broker code to get raw broker pages
		brkouput = brkouput + brkhtml.replace("#brk", brkcdes[i]).replace("#id", popupBondID); 
	}

	localCache[bidbrokers[0]].innerHTML = brkouput;


	var bidsizey = size.split(";");

	if(!localCache[bidsizey[0]])
		localCache[bidsizey[0]] = document.getElementById(bidsizey[0]);

	localCache[bidsizey[0]].innerHTML = bidsizey[1];


	var timey = time.split(";")
	if(!localCache[timey[0]])
		localCache[timey[0]] = document.getElementById(timey[0]);

	localCache[timey[0]].innerHTML = timey[1];


	if(localCache[bidpx[0]].className.substring(0,3) == "ask")
	{
		localCache[bidpx[0]].className 		= "popTopRowPx flash";
		localCache[bidsizey[0]].className 	= "popTopRowSize flash";
		localCache[bidbrokers[0]].className = "popTopRowBrk flash";
		localCache[timey[0]].className 		= "popTopRowtime flash";
		window.setTimeout(function()
		{
			localCache[bidpx[0]].className 		="popTopRowPx";
			localCache[bidsizey[0]].className 	="popTopRowSize";
			localCache[bidbrokers[0]].className ="popTopRowBrk";
			localCache[timey[0]].className 		="popTopRowtime";
		}, 5000)
	}
	else
	{
		localCache[bidpx[0]].className = "popTopRowPx flash"
		localCache[bidsizey[0]].className 	= "popTopRowSize flash";
		localCache[bidbrokers[0]].className = "popTopRowBrk flash";
		localCache[timey[0]].className 		= "popTopRowtime flash";
		window.setTimeout(function()
		{
			localCache[bidpx[0]].className="popTopRowPx";
			localCache[bidsizey[0]].className 	="popTopRowSize";
			localCache[bidbrokers[0]].className ="popTopRowBrk";
			localCache[timey[0]].className 		="popTopRowtime";

		}, 5000)		
	}

}

//_depthUpdatePopup("BID1;44.55", "SZBID1;5", "BRKBID1;GF", "TIMBID1;14:00");
function _depthUpdatePopup(px, size, brk, time)
{
	var localCache 		= cache; 

	var bidpx = px.split(";");
	
	if(!localCache[bidpx[0]])
		localCache[bidpx[0]] = document.getElementById(bidpx[0]);

	localCache[bidpx[0]].innerHTML = bidpx[1];


	var bidbrokers = brk.split(";");

	if(!localCache[bidbrokers[0]])
		localCache[bidbrokers[0]] = document.getElementById(bidbrokers[0]);

	//localCache[bidbrokers[0]].innerHTML = bidbrokers[1];
	
	//clickable broker codes
	var brklen  = bidbrokers[1].length;
	var brkcdes = bidbrokers[1];
	var brkhtml = '<span symid="#id" class="brkclick">#brk</span>'; 
	var brkouput ="";
	for(var i=0;i<brklen;i++)
	{
		brkouput = brkouput + brkhtml.replace("#brk", brkcdes[i]).replace("#id", popupBondID);
	}

	localCache[bidbrokers[0]].innerHTML = brkouput;



	var bidsizey = size.split(";");

	if(!localCache[bidsizey[0]])
		localCache[bidsizey[0]] = document.getElementById(bidsizey[0]);

	localCache[bidsizey[0]].innerHTML = bidsizey[1];


	var timey = time.split(";")
	if(!localCache[timey[0]])
		localCache[timey[0]] = document.getElementById(timey[0]);

	localCache[timey[0]].innerHTML = timey[1];


	if(localCache[bidpx[0]].className.substring(0,3) == "ask")
	{
		localCache[bidpx[0]].className 		= "ask flash";
		localCache[bidsizey[0]].className 	= "size flash";
		localCache[bidbrokers[0]].className = "brokers flash";
		localCache[timey[0]].className 		= "time flash";
		window.setTimeout(function()
		{
			localCache[bidpx[0]].className 		="ask";
			localCache[bidsizey[0]].className 	="size";
			localCache[bidbrokers[0]].className ="brokers";
			localCache[timey[0]].className 		="time";
		}, 5000)
	}
	else
	{
		localCache[bidpx[0]].className = "bid flash"
		localCache[bidsizey[0]].className 	= "size flash";
		localCache[bidbrokers[0]].className = "brokers flash";
		localCache[timey[0]].className 		= "time flash";
		window.setTimeout(function()
		{
			localCache[bidpx[0]].className="bid";
			localCache[bidsizey[0]].className 	="size";
			localCache[bidbrokers[0]].className ="brokers";
			localCache[timey[0]].className 		="time";

		}, 5000)		
	}


}


// ----------------- POPUP Update END ------------------------------------



























