//---------------------------------------------------------------------------------------------------------------------------------------------------
var crude = "CLN2 CLQ2 CLU2 CLV2 CLX2 CLZ2 CLF3 CLG3 CLH3 CLJ3 CLK3 CLM3 CLN3 CLQ3 CLU3 CLV3 CLX3 CLZ3 CLF4 CLG4 CLH4 CLJ4 CLK4 CLM4 CLN4 CLQ4 CLU4 CLV4 CLX4 CLZ4 CLF5 CLG5 CLH5 CLJ5 CLK5 CLM5 CLN5 CLQ5 CLU5 CLV5 CLX5 CLZ5 CLF6 CLG6 CLH6 CLJ6 CLK6 CLM6 CLN6 CLQ6 CLU6 CLV6 CLX6 CLZ6 CLF7 CLG7 CLH7 CLJ7 CLK7 CLM7 CLN7 CLQ7 CLU7 CLV7 CLX7 CLZ7 CLM8 CLZ8 CLM9 CLZ9 CLM0 CLZ0";

var crudeAndNames = "CLN2-CLc1;CLQ2-CLc2;CLU2-CLc3;CLV2-CLc4;CLX2-CLc5;CLZ2-CLc6;CLF3-CLc7;CLG3-CLc8;CLH3-CLc9;CLJ3-CLc10;CLK3-CLc11;CLM3-CLc12;CLN3-CLc13;CLQ3-CLc14;CLU3-CLc15;CLV3-CLc16;CLX3-CLc17;CLZ3-CLc18;CLF4-CLc19;CLG4-CLc20;CLH4-CLc21;CLJ4-CLc22;CLK4-CLc23;CLM4-CLc24;CLN4-CLc25;CLQ4-CLc26;CLU4-CLc27;CLV4-CLc28;CLX4-CLc29;CLZ4-CLc30;CLF5-CLc31;CLG5-CLc32;CLH5-CLc33;CLJ5-CLc34;CLK5-CLc35;CLM5-CLc36;CLN5-CLc37;CLQ5-CLc38;CLU5-CLc39;CLV5-CLc40;CLX5-CLc41;CLZ5-CLc42;CLF6-CLc43;CLG6-CLc44;CLH6-CLc45;CLJ6-CLc46;CLK6-CLc47;CLM6-CLc48;CLN6-CLc49;CLQ6-CLc50;CLU6-CLc51;CLV6-CLc52;CLX6-CLc53;CLZ6-CLc54;CLF7-CLc55;CLG7-CLc56;CLH7-CLc57;CLJ7-CLc58;CLK7-CLc59;CLM7-CLc60;CLN7-CLc61;CLQ7-CLc62;CLU7-CLc63;CLV7-CLc64;CLX7-CLc65;CLZ7-CLc66;CLM8-CLc67;CLZ8-CLc68;CLM9-CLc69;CLZ9-CLc70;CLM0-CLc71;CLZ0-CLc72"

var crudeAndNamesAndAggregate = "CLN2-CLc1-AGG1;CLQ2-CLc2-AGG1;CLU2-CLc3-AGG1;CLV2-CLc4-AGG1;CLX2-CLc5-AGG1;CLZ2-CLc6-AGG1;CLF3-CLc7-AGG2;CLG3-CLc8-AGG2;CLH3-CLc9-AGG2;CLJ3-CLc10-AGG3;CLK3-CLc11-AGG3;CLM3-CLc12-AGG3;CLN3-CLc13-AGG3;CLQ3-CLc14-AGG3;CLU3-CLc15-AGG3;CLV3-CLc16-AGG3;CLX3-CLc17-AGG3;CLZ3-CLc18-AGG3;CLF4-CLc19-AGG3;CLG4-CLc20;CLH4-CLc21-AGG4;CLJ4-CLc22-AGG4;CLK4-CLc23-AGG4;CLM4-CLc24-AGG4;CLN4-CLc25-AGG4;CLQ4-CLc26-AGG4;CLU4-CLc27-AGG4;CLV4-CLc28-AGG4;CLX4-CLc29;CLZ4-CLc30-AGG5;CLF5-CLc31-AGG5;CLG5-CLc32-AGG5;CLH5-CLc33-AGG5;CLJ5-CLc34-AGG5;CLK5-CLc35;CLM5-CLc36-AGG6;CLN5-CLc37-AGG6;CLQ5-CLc38-AGG6;CLU5-CLc39-AGG6;CLV5-CLc40-AGG6;CLX5-CLc41-AGG6;CLZ5-CLc42-AGG6;CLF6-CLc43-AGG6;CLG6-CLc44-AGG6;CLH6-CLc45-AGG6;CLJ6-CLc46-AGG6;CLK6-CLc47-AGG6;CLM6-CLc48-AGG6;CLN6-CLc49-AGG6;CLQ6-CLc50-AGG6;CLU6-CLc51-AGG6;CLV6-CLc52-AGG6;CLX6-CLc53-AGG6;CLZ6-CLc54-AGG6;CLF7-CLc55-AGG6;CLG7-CLc56-AGG6;CLH7-CLc57-AGG6;CLJ7-CLc58-AGG6;CLK7-CLc59-AGG6;CLM7-CLc60-AGG6;CLN7-CLc61-AGG6;CLQ7-CLc62-AGG6;CLU7-CLc63-AGG6;CLV7-CLc64-AGG6;CLX7-CLc65-AGG6;CLZ7-CLc66-AGG6;CLM8-CLc67-AGG6;CLZ8-CLc68-AGG6;CLM9-CLc69-AGG6;CLZ9-CLc70-AGG6;CLM0-CLc71-AGG6;CLZ0-CLc72-AGG6"
var crudeAndNamesAndAggregateAndDepth = "CLN2-CLc1-AGG1-1;CLQ2-CLc2-AGG1-2;CLU2-CLc3-AGG1-2;CLV2-CLc4-AGG1-2;CLX2-CLc5-AGG1-2;CLZ2-CLc6-AGG1-1;CLF3-CLc7-AGG2-2;CLG3-CLc8-AGG2-2;CLH3-CLc9-AGG2-2;CLJ3-CLc10-AGG3-2;CLK3-CLc11-AGG3-1;CLM3-CLc12-AGG3-2;CLN3-CLc13-AGG3-2;CLQ3-CLc14-AGG3-2;CLU3-CLc15-AGG3-2;CLV3-CLc16-AGG3-1;CLX3-CLc17-AGG3-2;CLZ3-CLc18-AGG3-2;CLF4-CLc19-AGG3-2;CLG4-CLc20-2;CLH4-CLc21-AGG4-1;CLJ4-CLc22-AGG4-2;CLK4-CLc23-AGG4-2;CLM4-CLc24-AGG4-2;CLN4-CLc25-AGG4-2;CLQ4-CLc26-AGG4-1;CLU4-CLc27-AGG4-2;CLV4-CLc28-AGG4-2;CLX4-CLc29-2;CLZ4-CLc30-AGG5-2;CLF5-CLc31-AGG5-1;CLG5-CLc32-AGG5-2;CLH5-CLc33-AGG5-2;CLJ5-CLc34-AGG5-2;CLK5-CLc35-2;CLM5-CLc36-AGG6-1;CLN5-CLc37-AGG6-2;CLQ5-CLc38-AGG6-2;CLU5-CLc39-AGG6-2;CLV5-CLc40-AGG6-2;CLX5-CLc41-AGG6-1;CLZ5-CLc42-AGG6-2;CLF6-CLc43-AGG6-2;CLG6-CLc44-AGG6-2;CLH6-CLc45-AGG6-2;CLJ6-CLc46-AGG6-1;CLK6-CLc47-AGG6-2;CLM6-CLc48-AGG6-2;CLN6-CLc49-AGG6-2;CLQ6-CLc50-AGG6-2;CLU6-CLc51-AGG6-1;CLV6-CLc52-AGG6-2;CLX6-CLc53-AGG6-2;CLZ6-CLc54-AGG6-2;CLF7-CLc55-AGG6-2;CLG7-CLc56-AGG6-1;CLH7-CLc57-AGG6-2;CLJ7-CLc58-AGG6-2;CLK7-CLc59-AGG6-2;CLM7-CLc60-AGG6-2;CLN7-CLc61-AGG6-1;CLQ7-CLc62-AGG6-2;CLU7-CLc63-AGG6-2;CLV7-CLc64-AGG6-2;CLX7-CLc65-AGG6-2;CLZ7-CLc66-AGG6-1;CLM8-CLc67-AGG6-2;CLZ8-CLc68-AGG6-2;CLM9-CLc69-AGG6-2;CLZ9-CLc70-AGG6-2;CLM0-CLc71-AGG6-1;CLZ0-CLc72-AGG6-2";

var DowJones = "AA.N DIS.N KFT.OQ PG.N AXP.N GE.N KO.N T.N BA.N HD.N MCD.N TRV.N BAC.N HPQ.N MMM.N UTX.N CAT.N IBM.N MRK.N VZ.N CSCO.OQ INTC.OQ MSFT.OQ WMT.N CVX.N JNJ.N PFE.N XOM.N DD.N JPM.N";
var DowJoneAndNamesAndAggregateAndDepth = "KFT.OQ-KFRAFTFoods-AGG1-2;AA.N-Alcoa-AGG1-1;DIS.N-Disney-AGG1-1;PG.N-Proctor Gamble-AGG2-2;AXP.N-Axa Partners-AGG3-1";
var EuroDollar   = "EDN2 EDQ2 EDU2 EDV2 EDX2 EDZ2 EDH3 EDM3 EDU3 EDZ3 EDH4 EDM4 EDU4 EDZ4 EDH5 EDM5 EDU5 EDZ5 EDH6 EDM6 EDU6 EDZ6 EDH7 EDM7 EDU7 EDZ7 EDH8 EDM8 EDU8 EDZ8 EDH9 EDM9 EDU9 EDZ9 EDH0 EDM0 EDU0 EDZ0 EDH1 EDM1 EDU1 EDZ1 EDH2 EDM2";

var crudeBenchmarks = "CLN2-5YUST-1MUST,3MUST,6MUST,1YUST,2YUST,3YUST,5YUST,7YUST,10YUST,30YUST CLQ2-5YUST-1MUST,3MUST,6MUST,1YUST,2YUST,3YUST,5YUST,7YUST,10YUST,30YUST";


var hideEmptyRows = false;
var globalCountry       = "";

var refBook;
var ViewID;
var globalHideEmpty;
var cache;



// -------------------------- NanoScroller START ----------------------------------------------
function resetNanoWindowSize()
{

	var viewportWidth = $(window).width()-20;
	var viewportHeight = $(window).height()-140;

	$("#application").find(".nano").css(
	{
		width:viewportWidth,
		height:viewportHeight
	});
	
	

	$("#application .content").css(
	{
	 	width:viewportWidth+20,
	  	height:viewportHeight+140
	 	// width:viewportWidth,
	  // 	height:viewportHeight

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
// -------------------------- NanoScroller END ----------------------------------------------



// -------------------------- Initialise START ------------------------------------
window.hookBook = function (myBookRef,View) 
{
	ViewID  = View; 
	refBook = myBookRef; 
	cache 	= new Object();
	resetNanoWindowSize();
}

$(window).smartresize(function()
{
	resetNanoWindowSize()
});
// -------------------------- Initialise END ------------------------------------


// ----------------- Event Handler Start ---------------------------------
/* Event Delegation being used here
*/

if (navigator.appName == "Microsoft Internet Explorer")
{
	document.attachEvent("onclick", createDocEvents);

	function createDocEvents (event)
	{
		var target = event.srcElement;


		if(target.id == "brokerfilter")
		{	toggleBrokerFilter(); return false; }
		
		if(target.id == "menucloser")
		{	hideMenus(); hideRightClickMenu(); return false; }

		if(target.className == "favnot" || target.className == "favsel")
		{	selectbroker(); return false; }

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

		if(target.className.search("tablink") != -1)
		{  
			if(target.getAttribute("tabtype") == "main")
			{	toggleMainTab(target); return false; }
			else if(target.getAttribute("tabtype") == "cntry")
			{	togglecountryTab(target); return false;	}
			else if(target.getAttribute("tabtype") == "brk")
			{	togglebrokerTab(target); return false;	}
		}

		if(target.className =="alert")
		{	$("#alertpopup").fadeOut('fast'); return false;}
		
		if(target.id =="alertshowbond")
		{launchPopupViaSearch(document.getElementById("alertmsg").innerHTML.split("/")[0]);$("#alertpopup").fadeOut('fast');return false;}
		
	}
	document.attachEvent("oncontextmenu",createRightClickEvent);
	
	function createRightClickEvent(event)
	{
		if (event.srcElement.nodeName =="TH")
		{//table header
			var target = event.srcElement;
			showHeaderRightClickMenu(target);
		}
		else if(event.srcElement.nodeName =="TD")
		{//table body
			var target = event.srcElement.parentNode; //parentNode because user clicks on cell, and you need row
			if(target.getAttribute("depthRow") == "false")	
			{ showRightClickMenu(target); }
		}
		return false;
	}

}

// ----------------- Event Handler End ---------------------------------






// ------------------------- Add/Remove Bond Start --------------------------------

 function newBondEikonWindowTable(symbol,symbolName,sector,view,grouping,symType)
 {
 	var evenOrOddRow = "odd";
 	var $groupLast 	 = $("#"+sector).find('tr[grouping="'+ grouping + '"]').last(); //find the last bond of a group, e.g the GAZPROM level grouping of instruments
 	var table 		 = document.getElementById(sector);
 	
 	//some bonds will not have a grouping that already exists in the table
 	if($groupLast.length != 0)
 	{//grouping does exist, set up for appending to the end of the group
		if($groupLast.prev().hasClass("odd"))//don't look at the invisible depth row
			evenOrOddRow = "even";
	}
	else 
	{//grouping doesn't exist, so set up for adding at the end of the table
		if(table.rows[table.rows.length-2].className.search("odd") != -1)
			evenOrOddRow = "even";
	}
	
	var rowTemplate  = [];
	var k 			 = 0;
	rowTemplate[k++] = '<TR id="#isin" uniid="#universalId" class="#oddEven expand flash" grouping="#issuer" depthRow="false" attribution="#attribution">'; 		//[0]
	rowTemplate[k++] = '<TD class="name"><img class="noimage" src="blank.png"/>#bbqName</TD>'; 	//[1]
	rowTemplate[k++] = '<TD class="btime" 	  id="#bbqTimeBid">&nbsp;test</TD>'; 						//[2]
	rowTemplate[k++] = '<TD class="bbrokers"  id="#bbqBrokersBid">&nbsp;</TD>'; 					//[3]
	rowTemplate[k++] = '<TD class="bsize" 	  id="#bbqSzBid">&nbsp;</TD>'; 						//[4]
	rowTemplate[k++] = '<TD class="bid" 	  id="#bbqPxBid">&nbsp;</TD>'; 			//[5]
	rowTemplate[k++] = '<TD class="ask" 	  id="#bbqPxAsk">&nbsp;</TD>';			//[6]
	rowTemplate[k++] = '<TD class="asize" 	  id="#bbqSzAsk">&nbsp;</TD>'; 						//[7]
	rowTemplate[k++] = '<TD class="abrokers"  id="#bbqBrokersAsk">&nbsp;</TD>'; 					//[8]
	rowTemplate[k++] = '<TD class="atime"  	  id="#bbqTimeAsk">&nbsp;</TD>'; 						//[9]
	rowTemplate[k++] = '<TD class="byield"    id="#bbqYieldBid">&nbsp;</TD>'; 					//[10]
	rowTemplate[k++] = '<TD class="ayield"    id="#bbqYieldAsk">&nbsp;</TD>'; 					//[11]
	rowTemplate[k++] = '<TD class="bduration" id="#bbqDurationBid">&nbsp;</TD>'; 					//[12]
	rowTemplate[k++] = '<TD class="aduration" id="#bbqDurationAsk">&nbsp;</TD>'; 					//[13]
	rowTemplate[k++] = '<TD class="bzspread"  id="#bbqZsprdBid">&nbsp;</TD>'; 					//[14]
	rowTemplate[k++] = '<TD class="azspread"  id="#bbqZsprdAsk">&nbsp;</TD></TR>';				//[15]
	rowTemplate[k++] = '<TR id="#bbqDEPTH" class="collapse"  grouping="#issuer" usedtobe="" depthRow="true"><TD colspan=#colspan></TD></TR>';//[16]


 	rowTemplate[0]   = rowTemplate[0].replace('#isin',symbol);	
 	//rowTemplate[0] = rowTemplate[0].replace('#universalId',symbolList.getAttribute("uniid"));
 	rowTemplate[0]   = rowTemplate[0].replace('#oddEven',evenOrOddRow);
 	rowTemplate[0]   = rowTemplate[0].replace('#issuer',grouping);
 	rowTemplate[1]   = rowTemplate[1].replace('#bbqName',symbolName);
	
	if(symType == 1) //only put in the expand.png if it's an orderbook instrument (i.e. has depth)
	{	
		rowTemplate[1] = rowTemplate[1].replace('blank','expand');
		rowTemplate[1] = rowTemplate[1].replace('noimage','depthplusminus');
	}

 	rowTemplate[2]   = rowTemplate[2].replace('#bbqTimeBid',symbol 	+ "TIMBID");
 	rowTemplate[3]   = rowTemplate[3].replace('#bbqBrokersBid',symbol + "BRKBID");
 	rowTemplate[4]   = rowTemplate[4].replace('#bbqSzBid',symbol 		+ "SZBID");
 	rowTemplate[5]   = rowTemplate[5].replace('#bbqPxBid',symbol 		+ "PXBID");
 	rowTemplate[6]   = rowTemplate[6].replace('#bbqPxAsk',symbol 		+ "PXASK");
 	rowTemplate[7]   = rowTemplate[7].replace('#bbqSzAsk',symbol 		+ "SZASK");
 	rowTemplate[8]   = rowTemplate[8].replace('#bbqBrokersAsk',symbol + "BRKASK");
 	rowTemplate[9]   = rowTemplate[9].replace('#bbqTimeAsk',symbol 	+ "TIMASK");
 	rowTemplate[10]  = rowTemplate[10].replace('#bbqYieldBid',symbol 	+ "YLDBID");
 	rowTemplate[11]  = rowTemplate[11].replace('#bbqYieldAsk',symbol 	+ "YLDASK");
 	rowTemplate[12]  = rowTemplate[12].replace('#bbqDurationBid',symbol + "DURBID");
 	rowTemplate[13]  = rowTemplate[13].replace('#bbqDurationAsk',symbol + "DURASK");
 	rowTemplate[14]  = rowTemplate[14].replace('#bbqZsprdBid',symbol 	+ "ZSPBID");
 	rowTemplate[15]  = rowTemplate[15].replace('#bbqZsprdAsk',symbol 	+ "ZSPASK");
 	rowTemplate[16]  = rowTemplate[16].replace('#bbqDEPTH',symbol 	+ "MD");	
 	rowTemplate[16]  = rowTemplate[16].replace('#issuer',grouping);
 	
	var colspan = 15;
	if (YldColState == "hidden")
	{
		rowTemplate[10] = rowTemplate[10].replace("byield","byield hide")		
		rowTemplate[11] = rowTemplate[11].replace("ayield","ayield hide")
		colspan = colspan - 2;
	}	
	if (DurColState == "hidden")
	{
		rowTemplate[12] = rowTemplate[12].replace("bduration","bduration hide")		
		rowTemplate[13] = rowTemplate[13].replace("aduration","aduration hide")
		colspan = colspan - 2;
	}		
	if (ZSprdColState == "hidden")
	{
		rowTemplate[14] = rowTemplate[14].replace("bzspread","bzspread hide")		
		rowTemplate[15] = rowTemplate[15].replace("azspread","azspread hide")
		colspan = colspan - 2;
	}	

	rowTemplate[16] = rowTemplate[16].replace("#colspan",colspan.toString());
 	
 	rowTemplate = rowTemplate.join("");

	//some bonds will not have a grouping that already exists in the table
	if($groupLast.length != 0)
	{//group already exists, so add to the end of existing group
	
 		$groupLast.after(rowTemplate);
 		resetOddEvenColour(sector,symbol,evenOrOddRow);
	}
	else 
	{//group doesn't exist, so add to end of the table
		table.insertAdjacentHTML('beforeend',rowTemplate);
	}

 	displayAlert(symbol, symbolName,sector);

	window.setTimeout(function(){$("#"+symbol).removeClass("flash");}, 5000)
	window.setTimeout(function(){$("#alertpopup").fadeOut('fast');},5000)
	
 }


function resetOddEvenColour(sector,symbol,evenOrOddRow)
{
	var table   = document.getElementById(sector);		
	var length  = table.rows.length;

	var actualTableLen 	= length - 1; //need this because table headers are counted as well
	var symbolIndex 	= table.rows[symbol].rowIndex;
	
	if((symbolIndex + 2) < actualTableLen) //if it's the last row already, don't bother with reseting row colours
	{
		var evenOdd = "";
		var counter = 0; //need extra counter because of the hidden market depth rows, they make it difficult to determine odd or even
		
		if (evenOrOddRow == "even")
			counter = 1;
		else
			counter = 0;

		var startRowIndex = table.rows[symbol].rowIndex + 2;

		//only loop through the remaining 
		for(var i=startRowIndex;i<length;i=i+2)
		{
			var remainder = counter%2;
			if(remainder == 0)
				evenOdd = "even";
			else
				evenOdd = "odd";
			
			var $curRow = $(table.rows[i]);
	
	
			//the rows already have odd/row class value, so replace accordingly
			if ($curRow.hasClass("odd"))
				$curRow[0].className = modifyClassName($curRow[0].className,"odd",evenOdd);
			else 
				$curRow[0].className = modifyClassName($curRow[0].className,"even",evenOdd);
						
			counter++;
			
		}
	}
}

function displayAlert(symbol, symbolName,sector)
{
	//create the alert in the bottom right hand corner
	var d = new Date();
	
	document.getElementById("alertmsg").innerHTML = symbol + "/" + symbolName + "/" + sector + " @ " + d.getHours() + ":" + d.getMinutes();
	var $alertPopup = $("#alertpopup");
	$alertPopup
		.css(
		{
			left:$(window).width()-250,
			top:$(window).height()-150,
			'z-index':99
		})
		.fadeIn('fast');
}
// ------------------------- Add/Remove Bond End --------------------------------




// ------------------------- List Setup Funtions Start --------------------------------
function setCountry(pCountry)
{
	document.getElementById("fullviewcountry").innerHTML = pCountry;
	globalCountry = pCountry;

}

function initialiseEikonWindowTable (symbols, sector,view) 
{
	
	var fullView  = []; //this is the html table, which the header and all rows will be inserted into
	var i 		  = 0;
	fullView[i++] = '<table class="quotes" id="#sector">'; 	//tableStart 	 [0]
	fullView[i++] = ""; 						//tableHeader 	 [1]
	fullView[i++] = "<tbody>";					//tableBodyStart [2]
	fullView[i++] = "";							//tableRows 	 [3]
	fullView[i++] = "</tbody></table>";			//tableBodyEnd 	 [4]

	var rowIndex = 0; //set up the rows of the table. The row section of the totalView array, is an array of strings (joined rowTemplate instances)
	fullView[0]  = fullView[0].replace('#sector',sector); //set the id of the table
	fullView[3]  = new Array();

	//construct the header. This part will vary when other template functions are written
	var tableHeader  = [];
	var j 			 = 0;
	tableHeader[j++] = '<thead><tr>';
	tableHeader[j++] =	'<th class="name"><img class="sectorplusminus" src="collapse.png"/>'+ sector +'</th>';
	tableHeader[j++] =	'<th class="btime">Time</th>';
	tableHeader[j++] =	'<th class="bbrokers">C</th>';
	tableHeader[j++] =	'<th class="bsize">Size</th>' ;
	tableHeader[j++] =	'<th class="bid">Bid</th>';
	tableHeader[j++] =	'<th class="ask">Ask</th>';
	tableHeader[j++] = 	'<th class="asize">Size</th>';
	tableHeader[j++] = 	'<th class="abrokers">C</th>';
	tableHeader[j++] =	'<th class="atime">Time</th>';

	tableHeader[j++] =	'<th class="byield">Bid Yield</th>';
	tableHeader[j++] =	'<th class="ayield">Ask Yield</th>';

	tableHeader[j++] =	'<th class="bduration">Bid Dur.</th>';
	tableHeader[j++] =	'<th class="aduration">Ask Dur.</th>';

	tableHeader[j++] =	'<th class="bzspread">Bid ZSprd</th>';
	tableHeader[j++] =	'<th class="azspread">Ask ZSprd</th>';
	tableHeader[j++] =	'</tr></thead><col width=110>';

	if (YldColState == "hidden")
	{
		tableHeader[10] = tableHeader[10].replace("byield","byield hide")		
		tableHeader[11] = tableHeader[11].replace("ayield","ayield hide")
	}	
	if (DurColState == "hidden")
	{
		tableHeader[12] = tableHeader[12].replace("bduration","bduration hide")		
		tableHeader[13] = tableHeader[13].replace("aduration","aduration hide")
	}	
	if (ZSprdColState == "hidden")
	{
		tableHeader[14] = tableHeader[14].replace("bzspread","bzspread hide")		
		tableHeader[15] = tableHeader[15].replace("azspread","azspread hide")
	}	

	//Add the header to the main array where the table's html is stored/created
	fullView[1] = tableHeader.join("");


	//create a row template that matches the header, declared previously above
	var rowTemplate  = [];
	var k 			 = 0;
	rowTemplate[k++] = '<TR id="#isin" uniid="#universalId" class="#oddEven expand" grouping="#issuer" depthRow="false" attribution="#attribution">'; 		//[0]
	rowTemplate[k++] = '<TD class="name"><img class="noimage" src="blank.png"/>#bbqName</TD>'; 	//[1]
	rowTemplate[k++] = '<TD class="btime" 	  id="#bbqTimeBid">&nbsp;test</TD>'; 						//[2]
	rowTemplate[k++] = '<TD class="bbrokers"  id="#bbqBrokersBid">&nbsp;</TD>'; 					//[3]
	rowTemplate[k++] = '<TD class="bsize" 	  id="#bbqSzBid">&nbsp;</TD>'; 						//[4]
	rowTemplate[k++] = '<TD class="bid" 	  id="#bbqPxBid">&nbsp;</TD>'; 			//[5]
	rowTemplate[k++] = '<TD class="ask" 	  id="#bbqPxAsk">&nbsp;</TD>';			//[6]
	rowTemplate[k++] = '<TD class="asize" 	  id="#bbqSzAsk">&nbsp;</TD>'; 						//[7]
	rowTemplate[k++] = '<TD class="abrokers"  id="#bbqBrokersAsk">&nbsp;</TD>'; 					//[8]
	rowTemplate[k++] = '<TD class="atime"  	  id="#bbqTimeAsk">&nbsp;</TD>'; 						//[9]
	rowTemplate[k++] = '<TD class="byield"    id="#bbqYieldBid">&nbsp;</TD>'; 					//[10]
	rowTemplate[k++] = '<TD class="ayield"    id="#bbqYieldAsk">&nbsp;</TD>'; 					//[11]
	rowTemplate[k++] = '<TD class="bduration" id="#bbqDurationBid">&nbsp;</TD>'; 					//[12]
	rowTemplate[k++] = '<TD class="aduration" id="#bbqDurationAsk">&nbsp;</TD>'; 					//[13]
	rowTemplate[k++] = '<TD class="bzspread"  id="#bbqZsprdBid">&nbsp;</TD>'; 					//[14]
	rowTemplate[k++] = '<TD class="azspread"  id="#bbqZsprdAsk">&nbsp;</TD></TR>';				//[15]
	rowTemplate[k++] = '<TR id="#bbqDEPTH" class="collapse last"  grouping="#issuer" usedtobe="" depthRow="true"><TD colspan=#colspan></TD></TR>';//[16]

	var colspan = 15;
	if (YldColState == "hidden")
	{
		rowTemplate[10] = rowTemplate[10].replace("byield","byield hide")		
		rowTemplate[11] = rowTemplate[11].replace("ayield","ayield hide")
		colspan = colspan - 2;
	}	
	if (DurColState == "hidden")
	{
		rowTemplate[12] = rowTemplate[12].replace("bduration","bduration hide")		
		rowTemplate[13] = rowTemplate[13].replace("aduration","aduration hide")
		colspan = colspan - 2;
	}		
	if (ZSprdColState == "hidden")
	{
		rowTemplate[14] = rowTemplate[14].replace("bzspread","bzspread hide")		
		rowTemplate[15] = rowTemplate[15].replace("azspread","azspread hide")
		colspan = colspan - 2;
	}	

	rowTemplate[16] = rowTemplate[16].replace("#colspan",colspan.toString());
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

		aRow[0]   = aRow[0].replace('#isin',symbol);
		//aRow[0] = aRow[0].replace('#universalId',symbolList.getAttribute("uniid"));
		aRow[0]   = aRow[0].replace('#oddEven',evenOrOddRow);
		aRow[0]   = aRow[0].replace('#issuer',grouping);
		aRow[1]   = aRow[1].replace('#bbqName',name);
		
		if(symType == 1)
		{	
			aRow[1] = aRow[1].replace('blank','expand');
			aRow[1] = aRow[1].replace('noimage','depthplusminus');
		}

		aRow[2]   = aRow[2].replace('#bbqTimeBid',symbol 	+ "TIMBID");
		aRow[3]   = aRow[3].replace('#bbqBrokersBid',symbol + "BRKBID");
		aRow[4]   = aRow[4].replace('#bbqSzBid',symbol 		+ "SZBID");
		aRow[5]   = aRow[5].replace('#bbqPxBid',symbol 		+ "PXBID");
		aRow[6]   = aRow[6].replace('#bbqPxAsk',symbol 		+ "PXASK");
		aRow[7]   = aRow[7].replace('#bbqSzAsk',symbol 		+ "SZASK");
		aRow[8]   = aRow[8].replace('#bbqBrokersAsk',symbol + "BRKASK");
		aRow[9]   = aRow[9].replace('#bbqTimeAsk',symbol 	+ "TIMASK");
		aRow[10]  = aRow[10].replace('#bbqYieldBid',symbol 	+ "YLDBID");
		aRow[11]  = aRow[11].replace('#bbqYieldAsk',symbol 	+ "YLDASK");
		aRow[12]  = aRow[12].replace('#bbqDurationBid',symbol + "DURBID");
		aRow[13]  = aRow[13].replace('#bbqDurationAsk',symbol + "DURASK");
		aRow[14]  = aRow[14].replace('#bbqZsprdBid',symbol 	+ "ZSPBID");
		aRow[15]  = aRow[15].replace('#bbqZsprdAsk',symbol 	+ "ZSPASK");
		aRow[16]  = aRow[16].replace('#bbqDEPTH',symbol 	+ "MD");
		aRow[16]  = aRow[16].replace('#issuer',grouping);

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
function updateBenchmarks(symbolBMs)
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

function initialiseBrokerMenu(pBrokers)
{// Tradition-Y,GFI-N,Evolution-N,StanBroker-Y,BestPriceBroker-Y
 // Call this function to initialise the broker filter menu. 
 // XXX Probably want to re-write this to process xml

	var brokers = pBrokers.split(",");
	var len = brokers.length;
	
	var brokerRowMenuTemplate=[];
	var l =0;
	brokerRowMenuTemplate[l++] = '<li><KBD id="#brokeridx" class="#selectedState">#selectedStateIcon</KBD><div class="brokerfil">#brokeridy</div></li>';

	var brokermenu = [];
	var m = 0;

	for(var i =len-1;i>=0;i--)
	{
		var broker    = brokers[i].split("-");
		var brokerRow = brokerRowMenuTemplate.slice(0);
		brokerRow[0] = brokerRow[0].replace("#brokeridx",broker[0]);
		brokerRow[0] = brokerRow[0].replace("#brokeridy",broker[0]);

		if(broker[1] == 'Y')
		{
			brokerRow[0] = brokerRow[0].replace("#selectedStateIcon","&#108;");
			brokerRow[0] = brokerRow[0].replace("#selectedState","favsel");
		}
		else
		{
			brokerRow[0] = brokerRow[0].replace("#selectedStateIcon","&#161;");
			brokerRow[0] = brokerRow[0].replace("#selectedState","favnot");
		}

		brokermenu[m++] = brokerRow[0];
	}
	document.getElementById("brokerfilterdropdown").innerHTML = brokermenu.join("");
}
function toggleBrokerFilter()
{
	var elem = document.getElementById("brokerfilterdropdown");
	if(elem.className == "hideme")
		elem.className = "show";
	else
		elem.className = "hideme";
		
	var menucloser = document.getElementById("menucloser");
	menucloser.className = "bringtofront";

}
function selectbroker()
{
	var objSrc = event.srcElement;

	if (objSrc.className == 'favnot')
	{//a list that was previously not selected, has been clicked on. So respond and enable the button and add to list. 
	
		objSrc.innerHTML = '&#108;';
		objSrc.className = 'favsel';
		alert("Call VBA function to add: " + objSrc.id + " to boker filter preferences");
	}
	else
	{
		objSrc.innerHTML = '&#161;';
		objSrc.className = 'favnot';				
		alert("Call VBA function to save preferences for : " + objSrc.id);
	}
}
// ----------------- My BrokerFilter End ---------------------------------


function hideMenus()
{
	
	var elem = document.getElementById("brokerfilterdropdown");
	elem.className = "hideme";
	elem = document.getElementById("mylistsdropdown");
	elem.className = "hideme";
	
	var menucloser = document.getElementById("menucloser");
	menucloser.className = "sendtoback";
}


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
		alert("Call VBA function to save in USER PREFs the expanded state of: " + globalCountry + " " + target.parentNode.innerText);
	}
}


function modifyClassName(className,from,to)
{
	return className.replace(from,to);
}


// ----------------- Sector Expand Collapse END ---------------------------------




// ----------------- Depth Expand Collapse START ---------------------------------
function toggleDepthExpandCollapse(target)
{
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
		//refBook.GetDepthFor(depthRow.id.substring(0,4),"stop");
		//alert("Call VBA Function to STOP market depth data for: "+ depthRow.id);
		//alert("Call VBA Function to remove from USER PREFS expanded state for : "+ depthRow.id);
	}
	else
	{//expand
	
		var MDTableTemplate = [];
		var n = 0;
		MDTableTemplate[n++] = '<TABLE class="marketdepth"><col width=110><tbody>';
		MDTableTemplate[n++] = new Array();
		MDTableTemplate[n++] = '</tbody></TABLE>'; 

		//create a row template that matches the header, declared previously above
		var MDTemplate = [];
		var m = 0;
		MDTemplate[m++] = '<TR>'; 					//[0]
		MDTemplate[m++] = '<TD class="name"></TD>'; 										//[1]
		MDTemplate[m++] = '<TD class="btime" id="#bidtime">14:00</TD>'; 				//[2]
		MDTemplate[m++] = '<TD class="bbrokers" id="#bbroker">B,G</TD>'; 			//[3]
		MDTemplate[m++] = '<TD class="bsize" id="#bsize">100</TD>'; 					//[4]
		MDTemplate[m++] = '<TD class="bid" id="#bid"></TD>';  		//[5]
		MDTemplate[m++] = '<TD class="ask" id="#ask"></TD>';			//[6]
		MDTemplate[m++] = '<TD class="asize" id="#asksize">100</TD>'; 				//[7]
		MDTemplate[m++] = '<TD class="abrokers" id="#abroker">B</TD>'; 			//[8]
		MDTemplate[m++] = '<TD class="atime" id="#asktime">16:090</TD>'; 				//[9]
		MDTemplate[m++] = '<TD class="byield" id="#byield"></TD>'; 								//[10]
		MDTemplate[m++] = '<TD class="ayield" id="#ayield"></TD>'; 								//[11]
		MDTemplate[m++] = '<TD class="bduration" id="#bduration"></TD>';							//[12]
		MDTemplate[m++] = '<TD class="aduration" id="#aduration"></TD>'; 						//[13]
		MDTemplate[m++] = '<TD class="bzspread" id="#bzspread">123</TD>'; 							//[14]
		MDTemplate[m++] = '<TD class="azspread" id="#azspread">123</TD></TR>';						//[15]

		var hidden = false;
		if (YldColState == "hidden")
		{
			MDTemplate[10] = MDTemplate[10].replace("byield","byield hide");		
			MDTemplate[11] = MDTemplate[11].replace("ayield","ayield hide");
			//depthRow.firstChild.setAttribute("colspan",parseInt(colspan) - 2);
			//colspan = colspan -2;
			hidden = true;
		}	
		if (DurColState == "hidden")
		{
			MDTemplate[12] = MDTemplate[12].replace("bduration","bduration hide");
			MDTemplate[13] = MDTemplate[13].replace("aduration","aduration hide");
			//depthRow.firstChild.setAttribute("colspan",parseInt(colspan) - 2);
			//colspan = colspan -2;
			hidden = true;
		}		
		if (ZSprdColState == "hidden")
		{
			MDTemplate[14] = MDTemplate[14].replace("bzspread","bzspread hide");		
			MDTemplate[15] = MDTemplate[15].replace("azspread","azspread hide");
			//depthRow.firstChild.setAttribute("colspan",parseInt(colspan) - 2);
			//colspan = colspan -2;
			hidden = true;
		}	

		var MDTable = MDTableTemplate.slice(0);
		
		for(var o=1;o<6;o++)
		{
			var MDRow = MDTemplate.slice(0);
			MDRow[2] = MDRow[2].replace("#bidtime", symbolRow.id + "TIMBID" + o);
			MDRow[3] = MDRow[3].replace("#bbroker", symbolRow.id + "BRKBID" + o);
			MDRow[4] = MDRow[4].replace("#bsize"  , symbolRow.id + "SZBID" + o);
			MDRow[5] = MDRow[5].replace("#bid"    , symbolRow.id + "PXBID" + o);
			MDRow[6] = MDRow[6].replace("#ask"	  , symbolRow.id + "PXASK" + o);
			MDRow[7] = MDRow[7].replace("#asksize", symbolRow.id + "SZASK" + o);
			MDRow[8] = MDRow[8].replace("#abroker", symbolRow.id + "BRKASK" + o);
			MDRow[9] = MDRow[9].replace("#asktime", symbolRow.id + "TIMASK" + o);

			MDRow[10] = MDRow[10].replace("#byield"		, symbolRow.id + "YLDBID" + o);
			MDRow[12] = MDRow[12].replace("#bduration"  , symbolRow.id + "YLDBID" + o);
			MDRow[14] = MDRow[14].replace("#bzspread"   , symbolRow.id + "ZSPBIF" + o);

			MDRow[11] = MDRow[11].replace("#ayield"     , symbolRow.id + "YLDASK" + o);
			MDRow[13] = MDRow[13].replace("#aduration"  , symbolRow.id + "DURASK" + o);
			MDRow[15] = MDRow[15].replace("#azspread"   , symbolRow.id + "ZSPASK" + o);

			MDTable[1][o-1] = MDRow.join("");
		}	
		MDTable[1] = MDTable[1].join("");



		target.setAttribute("src","collapse.png");
		depthRow.firstChild.innerHTML = MDTable.join("");
		//depthRow.className = "expand"; //tr.expand display:block didn't work with chrome
		depthRow.className = "mdduplicatebr"; //put this class in there to remove double border
		//refBook.GetDepthFor(depthRow.id.substring(0,4),"start");
		//alert("Call VBA Function to START market depth data for: "+ depthRow.id);
		//alert("Call VBA Function to save to USER PREFs expanded state for : "+ depthRow.id);

		if (hidden == true)
		{
			//deal with ie8 bug http://goo.gl/JRIcC
			// document.getElementById("tablecontentfullview").style.display = "none";
			// window.setTimeout(function() {document.getElementById("tablecontentfullview").style.display = "";},0);
			// document.getElementById("tablecontentfullview").style.display = "none";
			// document.getElementById("tablecontentfullview").style.display = "";
			
			//depthRow.firstChild.width = '500'
			//document.getElementById("tablecontentfullview").style.width;
			
			//document.getElementById("DowJones").style.width = '200'; //document.getElementById("tablecontentfullview").style.width;
			//document.getElementById("DowJones").style.display = "none";
			//document.getElementById("DowJones").style.display = "";
			
			//document.body.style.display = 'none';
			//document.body.style.display = '';
		}
	}
	


	


}

// ----------------- Depth Expand Collapse END ---------------------------------





// ----------------- Table Header Right Click Menu START ------------------------------------
var YldColState = "";
var DurColState ="";
var ZSprdColState = "";

function setColumnVisbilityPref(pref, val)
{
	if(pref == "Yield")
	{	
		if (val =="Y")
		{YldColState = "visible"; return}
		else
		{YldColState = "hidden"; return}
	}
	if(pref == "Duration")
	{	
		if (val =="Y")
		{DurColState = "visible"; return}
		else
		{DurColState = "hidden"; return}
	}
	if(pref == "ZSpread")
	{	
		if (val =="Y")
		{ZSprdColState = "visible"; return}
		else
		{ZSprdColState = "hidden"; return}
	}

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

			$("#tablecontentfullview td:nth-child(10),#tablecontentfullview th:nth-child(10)").addClass("hide"); 
			$("#tablecontentfullview td:nth-child(11),#tablecontentfullview th:nth-child(11)").addClass("hide");

			$("#tablecontentfullview .marketdpeth td:nth-child(10),#tablecontentfullview th:nth-child(10)").addClass("hide");
			$("#tablecontentfullview .marketdpeth td:nth-child(11),#tablecontentfullview th:nth-child(11)").addClass("hide");

			$("#tablecontentfullview .depthcolspan").attr("colspan",parseInt(colspan) - 2);
  		}
  		else
  		{
  			target.innerHTML = "&#108;";
			target.className = 'colhideshow valset';
			YldColState = "visible";

  			$("#tablecontentfullview td:nth-child(10),#tablecontentfullview th:nth-child(10)").removeClass("hide"); 
			$("#tablecontentfullview td:nth-child(11),#tablecontentfullview th:nth-child(11)").removeClass("hide");

			$("#tablecontentfullview .marketdpeth td:nth-child(10),#tablecontentfullview th:nth-child(10)").removeClass("hide");
			$("#tablecontentfullview .marketdpeth td:nth-child(11),#tablecontentfullview th:nth-child(11)").removeClass("hide");

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

			$("#tablecontentfullview td:nth-child(12),#tablecontentfullview th:nth-child(12)").addClass("hide"); 
			$("#tablecontentfullview td:nth-child(13),#tablecontentfullview th:nth-child(13)").addClass("hide");

			$("#tablecontentfullview .marketdpeth td:nth-child(12),#tablecontentfullview th:nth-child(12)").addClass("hide");
			$("#tablecontentfullview .marketdpeth td:nth-child(13),#tablecontentfullview th:nth-child(13)").addClass("hide");

			$("#tablecontentfullview .depthcolspan").attr("colspan",parseInt(colspan) - 2);
  		}
  		else
  		{
  			target.innerHTML = "&#108;";
			target.className = 'colhideshow valset';
			DurColState = "visible";

  			$("#tablecontentfullview td:nth-child(12),#tablecontentfullview th:nth-child(12)").removeClass("hide"); 
			$("#tablecontentfullview td:nth-child(13),#tablecontentfullview th:nth-child(13)").removeClass("hide");

			$("#tablecontentfullview .marketdpeth td:nth-child(12),#tablecontentfullview th:nth-child(12)").removeClass("hide");
			$("#tablecontentfullview .marketdpeth td:nth-child(13),#tablecontentfullview th:nth-child(13)").removeClass("hide");

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

			$("#tablecontentfullview td:nth-child(14),#tablecontentfullview th:nth-child(14)").addClass("hide"); 
			$("#tablecontentfullview td:nth-child(15),#tablecontentfullview th:nth-child(15)").addClass("hide");

			$("#tablecontentfullview .marketdpeth td:nth-child(14),#tablecontentfullview th:nth-child(14)").addClass("hide");
			$("#tablecontentfullview .marketdpeth td:nth-child(15),#tablecontentfullview th:nth-child(15)").addClass("hide");

			$("#tablecontentfullview .depthcolspan").attr("colspan",parseInt(colspan) - 2);
  		}
  		else
  		{
  			target.innerHTML = "&#108;";
			target.className = 'colhideshow valset';
			ZSprdColState = "visible";

  			$("#tablecontentfullview td:nth-child(14),#tablecontentfullview th:nth-child(14)").removeClass("hide"); 
			$("#tablecontentfullview td:nth-child(15),#tablecontentfullview th:nth-child(15)").removeClass("hide");

			$("#tablecontentfullview .marketdpeth td:nth-child(14),#tablecontentfullview th:nth-child(14)").removeClass("hide");
			$("#tablecontentfullview .marketdpeth td:nth-child(15),#tablecontentfullview th:nth-child(15)").removeClass("hide");

			$("#tablecontentfullview .depthcolspan").attr("colspan",parseInt(colspan) + 2);
  		}
  	}
  	setTimeout("hideRightClickMenu()",100);

  	//deal with ie8 bug http://goo.gl/JRIcC
	document.getElementById("tablecontentfullview").style.display = "none";
	window.setTimeout(function() {document.getElementById("tablecontentfullview").style.display = "";},0);
       
}


// ----------------- Table Header Right Click Menu END  ------------------------------------




// ----------------- Right Click Menu START ------------------------------------
function showRightClickMenu(target)
{
	hideRightClickMenu();

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
	
	if (pmylists != null) 
	{
		var myLists    = pmylists.split(" ");
		var listLength = myLists.length;

		//ensure that mylists the bond is currently on, is actually shown as selected in the right click menu (via &#108; wingding font)
		for(var j=0;j<listLength;j++)
		{
			if(myLists[j] == "List1")
			{
				list1 = list1 + '<tr>' +
									'<td class="label">List 1</td>'+
									'<td class="mylist valset">&#108;</td>'+
								'</tr>';
			}
			if(myLists[j] == "List2")
			{
				list2 = list2 + '<tr>' +
									'<td class="label">List 2</td>'+
									'<td class="mylist valset">&#108;</td>'+
								'</tr>';
			}
			if(myLists[j] == "List3")
			{
				list3 = list3 + '<tr>' +
									'<td class="label last">List 3</td>'+
									'<td class="mylist valset last">&#108;</td>'+
								'</tr>';
			}
		}

	}

	//for the rest of the lists that the bond does NOT belong to, make them not selected via &#161;
	if(list1 =="")
	{
		list1 = list1 + '<tr>' +
							'<td class="label">List 1</td>'+
							'<td class="mylist valnot">&#161;</td>'+
						'</tr>';				
	}
	if(list2 =="")
	{
		list2 = list2 + '<tr>' +
							'<td class="label">List 2</td>'+
							'<td class="mylist valnot">&#161;</td>'+
						'</tr>';				
	}
	if(list3 =="")
	{
		list3 = list3 + '<tr >' +
							'<td class="label last">List 3</td>'+
							'<td class="mylist valnot last">&#161;</td>'+
						'</tr>';				
	}

	sHtml = sHtml + list1 + list2 + list3;

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
			//this regex is important because the mylist attribute must store mylist="list1" NOT mylist="list 1"
			var listval = $(target).siblings(".label").text().replace(/\s/g, "");
			symbolMainTableRow.setAttribute("mylists", listval);
			//alert("Call VBA function to add: "+ symbol + " to "+ listval)
		}
		else
		{//this regex is important because the mylist attribute must store mylist="list1" NOT mylist="list 1"
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
	$('#rightclickmenu').hide();
	$("#rightclicktable").empty();
	document.getElementById("menucloser").className = "sendtoback";
}
// ----------------- Right Click Menu END  ------------------------------------


// ----------------- BROKER TABS Start ---------------------------------
function togglebrokerTab(target)
{
	if(target.id == "BRK1tabs")
	{
		document.getElementById("clickBRK1").className = "tablinkcontainer active";
		document.getElementById("clickBRK2").className = "tablinkcontainer";
		document.getElementById("clickBRK3").className = "tablinkcontainer";
		document.getElementById("clickBRK4").className = "tablinkcontainer";
		document.getElementById("clickBRK5").className = "tablinkcontainer";

		document.getElementById("BRK1tabs").className = "tablink";
		document.getElementById("BRK2tabs").className = "tablink hover";
		document.getElementById("BRK3tabs").className = "tablink hover";
		document.getElementById("BRK4tabs").className = "tablink hover";
		document.getElementById("BRK5tabs").className = "tablink hover";

		$("#tablecontentbrokerview").empty();
		initialiseEikonWindowTable(crudeAndNamesAndAggregateAndDepth,"Crude","brokerview");
	}
	else if (target.id =="BRK2tabs")
	{

		document.getElementById("clickBRK1").className = "tablinkcontainer";
		document.getElementById("clickBRK2").className = "tablinkcontainer active";
		document.getElementById("clickBRK3").className = "tablinkcontainer";
		document.getElementById("clickBRK4").className = "tablinkcontainer";
		document.getElementById("clickBRK5").className = "tablinkcontainer";

		document.getElementById("BRK1tabs").className = "tablink hover";
		document.getElementById("BRK2tabs").className = "tablink";
		document.getElementById("BRK3tabs").className = "tablink hover";
		document.getElementById("BRK4tabs").className = "tablink hover";
		document.getElementById("BRK5tabs").className = "tablink hover";

		$("#tablecontentbrokerview").empty();
		initialiseEikonWindowTable(crudeAndNamesAndAggregateAndDepth,"Crude","brokerview");
	}
	else if (target.id =="BRK3tabs")
	{
		document.getElementById("clickBRK1").className = "tablinkcontainer";
		document.getElementById("clickBRK2").className = "tablinkcontainer";
		document.getElementById("clickBRK3").className = "tablinkcontainer active";
		document.getElementById("clickBRK4").className = "tablinkcontainer";
		document.getElementById("clickBRK5").className = "tablinkcontainer";

		document.getElementById("BRK1tabs").className = "tablink hover";
		document.getElementById("BRK2tabs").className = "tablink hover";
		document.getElementById("BRK3tabs").className = "tablink";
		document.getElementById("BRK4tabs").className = "tablink hover";
		document.getElementById("BRK5tabs").className = "tablink hover";

		$("#tablecontentbrokerview").empty();
	}
	else if (target.id =="BRK4tabs")
	{
		document.getElementById("clickBRK1").className = "tablinkcontainer";
		document.getElementById("clickBRK2").className = "tablinkcontainer";
		document.getElementById("clickBRK3").className = "tablinkcontainer";
		document.getElementById("clickBRK4").className = "tablinkcontainer active";
		document.getElementById("clickBRK5").className = "tablinkcontainer";

		document.getElementById("BRK1tabs").className = "tablink hover";
		document.getElementById("BRK2tabs").className = "tablink hover";
		document.getElementById("BRK3tabs").className = "tablink hover";
		document.getElementById("BRK4tabs").className = "tablink";
		document.getElementById("BRK5tabs").className = "tablink hover";

		$("#tablecontentbrokerview").empty();
	}
	else if (target.id =="BRK5tabs")
	{
		document.getElementById("clickBRK1").className = "tablinkcontainer";
		document.getElementById("clickBRK2").className = "tablinkcontainer";
		document.getElementById("clickBRK3").className = "tablinkcontainer";
		document.getElementById("clickBRK4").className = "tablinkcontainer";
		document.getElementById("clickBRK5").className = "tablinkcontainer active";

		document.getElementById("BRK1tabs").className = "tablink hover";
		document.getElementById("BRK2tabs").className = "tablink hover";
		document.getElementById("BRK3tabs").className = "tablink hover";
		document.getElementById("BRK4tabs").className = "tablink hover";
		document.getElementById("BRK5tabs").className = "tablink";		

		$("#tablecontentbrokerview").empty();
	}
}

// ----------------- BROKER TABS Start ---------------------------------


// ----------------- COUNTRY TABS Start ---------------------------------
function togglecountryTab(target)
{
	
	if(target.id == "EUtabs-1")
	{
		document.getElementById("canvas_containerMIDEAST").className = "canvas hide";
		document.getElementById("canvas_containerLATAM").className = "canvas hide";
		document.getElementById("canvas_containerEU").className = "canvas";
		document.getElementById("canvas_containerAFRICA").className = "canvas hide";
		document.getElementById("canvas_containerCENASIA").className = "canvas hide";

		document.getElementById("clickEurope").className = "tablinkcontainer active";
		document.getElementById("clickLatam").className = "tablinkcontainer";
		document.getElementById("clickmideast").className = "tablinkcontainer";
		document.getElementById("clickafrica").className = "tablinkcontainer";
		document.getElementById("clickcentralasia").className = "tablinkcontainer";


		document.getElementById("EUtabs-1").className = "tablink";
		document.getElementById("LATAMtabs-1").className = "tablink hover";
		document.getElementById("MIDEASTtabs-1").className = "tablink hover";
		document.getElementById("AFRICAtabs-1").className = "tablink hover";
		document.getElementById("CENASIAtabs-1").className = "tablink hover";

		document.getElementById("countryinfolabel").innerHTML ="EUROPE"
		
	}
	else if(target.id == "LATAMtabs-1")
	{
		document.getElementById("canvas_containerMIDEAST").className = "canvas hide";
		document.getElementById("canvas_containerLATAM").className = "canvas";
		document.getElementById("canvas_containerEU").className = "canvas hide";
		document.getElementById("canvas_containerAFRICA").className = "canvas hide";
		document.getElementById("canvas_containerCENASIA").className = "canvas hide";
		
		document.getElementById("clickEurope").className = "tablinkcontainer";
		document.getElementById("clickLatam").className = "tablinkcontainer active";
		document.getElementById("clickmideast").className = "tablinkcontainer";
		document.getElementById("clickafrica").className = "tablinkcontainer";
		document.getElementById("clickcentralasia").className = "tablinkcontainer";
		
		document.getElementById("EUtabs-1").className = "tablink hover";
		document.getElementById("LATAMtabs-1").className = "tablink";
		document.getElementById("MIDEASTtabs-1").className = "tablink hover";
		document.getElementById("AFRICAtabs-1").className = "tablink hover";
		document.getElementById("CENASIAtabs-1").className = "tablink hover";

		document.getElementById("countryinfolabel").innerHTML ="LATIN AMERICA"
	}
	else if(target.id == "MIDEASTtabs-1")
	{
		document.getElementById("canvas_containerMIDEAST").className = "canvas";
		document.getElementById("canvas_containerLATAM").className = "canvas hide";
		document.getElementById("canvas_containerEU").className = "canvas hide";
		document.getElementById("canvas_containerAFRICA").className = "canvas hide";
		document.getElementById("canvas_containerCENASIA").className = "canvas hide";

		document.getElementById("clickEurope").className = "tablinkcontainer";
		document.getElementById("clickLatam").className = "tablinkcontainer";
		document.getElementById("clickmideast").className = "tablinkcontainer active";		
		document.getElementById("clickafrica").className = "tablinkcontainer";
		document.getElementById("clickcentralasia").className = "tablinkcontainer";

		document.getElementById("EUtabs-1").className = "tablink hover";
		document.getElementById("LATAMtabs-1").className = "tablink hover";
		document.getElementById("MIDEASTtabs-1").className = "tablink";
		document.getElementById("AFRICAtabs-1").className = "tablink hover";
		document.getElementById("CENASIAtabs-1").className = "tablink hover";

		document.getElementById("countryinfolabel").innerHTML ="MIDDLE EAST"
	}
	else if(target.id == "AFRICAtabs-1")
	{
		document.getElementById("canvas_containerMIDEAST").className = "canvas hide";
		document.getElementById("canvas_containerLATAM").className = "canvas hide";
		document.getElementById("canvas_containerEU").className = "canvas hide";
		document.getElementById("canvas_containerAFRICA").className = "canvas";
		document.getElementById("canvas_containerCENASIA").className = "canvas hide";

		document.getElementById("clickEurope").className = "tablinkcontainer";
		document.getElementById("clickLatam").className = "tablinkcontainer";
		document.getElementById("clickmideast").className = "tablinkcontainer";		
		document.getElementById("clickafrica").className = "tablinkcontainer active";
		document.getElementById("clickcentralasia").className = "tablinkcontainer";

		document.getElementById("EUtabs-1").className = "tablink hover";
		document.getElementById("LATAMtabs-1").className = "tablink hover";
		document.getElementById("MIDEASTtabs-1").className = "tablink hover";
		document.getElementById("AFRICAtabs-1").className = "tablink";
		document.getElementById("CENASIAtabs-1").className = "tablink hover";


		document.getElementById("countryinfolabel").innerHTML ="AFRICA"
	}
	else if(target.id == "CENASIAtabs-1")
	{
		document.getElementById("canvas_containerMIDEAST").className = "canvas hide";
		document.getElementById("canvas_containerLATAM").className = "canvas hide";
		document.getElementById("canvas_containerEU").className = "canvas hide";
		document.getElementById("canvas_containerAFRICA").className = "canvas hide";
		document.getElementById("canvas_containerCENASIA").className = "canvas";

		document.getElementById("clickEurope").className = "tablinkcontainer";
		document.getElementById("clickLatam").className = "tablinkcontainer";
		document.getElementById("clickmideast").className = "tablinkcontainer";		
		document.getElementById("clickafrica").className = "tablinkcontainer";
		document.getElementById("clickcentralasia").className = "tablinkcontainer active";

		document.getElementById("EUtabs-1").className = "tablink hover";
		document.getElementById("LATAMtabs-1").className = "tablink hover";
		document.getElementById("MIDEASTtabs-1").className = "tablink hover";
		document.getElementById("AFRICAtabs-1").className = "tablink hover";
		document.getElementById("CENASIAtabs-1").className = "tablink";


		document.getElementById("countryinfolabel").innerHTML ="CENTRAL ASIA"
	}
}
// ----------------- COUNTRY TABS End ---------------------------------

// ----------------- Main Tabs Start -----------------------------------
function toggleMainTab(target)
{

	if(target.id == "tabs-1") //MAPS
	{
		document.getElementById("tabs-1-1").className = "tabcontent";
		document.getElementById("tabs-2-1").className = "tabcontent hide";
		document.getElementById("tabs-3-1").className = "tabcontent hide";
		document.getElementById("tabs-4-1").className = "tabcontent hide";

		document.getElementById("tablinkcontainer-1").className = "tablinkcontainer active";
		document.getElementById("tablinkcontainer-2").className = "tablinkcontainer";
		document.getElementById("tablinkcontainer-3").className = "tablinkcontainer";
		document.getElementById("tablinkcontainer-4").className = "tablinkcontainer";

		document.getElementById("tabs-1").className = "tablink";
		document.getElementById("tabs-2").className = "tablink hover";
		document.getElementById("tabs-3").className = "tablink hover";
		document.getElementById("tabs-4").className = "tablink hover";

		//refBook.StopUpdates();
		//document.getElementById("tablecontentfullview").innerHTML = "";
		//document.getElementById("tablecontentbrokerview").innerHTML = "";
	}
	else if(target.id == "tabs-2") //METRO
	{
		document.getElementById("tabs-1-1").className = "tabcontent hide";
		document.getElementById("tabs-2-1").className = "tabcontent";
		document.getElementById("tabs-3-1").className = "tabcontent hide";
		document.getElementById("tabs-4-1").className = "tabcontent hide";

		document.getElementById("tablinkcontainer-1").className = "tablinkcontainer";
		document.getElementById("tablinkcontainer-2").className = "tablinkcontainer active";
		document.getElementById("tablinkcontainer-3").className = "tablinkcontainer";
		document.getElementById("tablinkcontainer-4").className = "tablinkcontainer";

		document.getElementById("tabs-1").className = "tablink hover";
		document.getElementById("tabs-2").className = "tablink";
		document.getElementById("tabs-3").className = "tablink hover";
		document.getElementById("tabs-4").className = "tablink hover";
		
		//refBook.StopUpdates();
		//document.getElementById("tablecontentfullview").innerHTML = "";
		//document.getElementById("tablecontentbrokerview").innerHTML = "";


	}
	else if(target.id == "tabs-3") //FULVIEW
	{
		document.getElementById("tabs-1-1").className = "tabcontent hide";
		document.getElementById("tabs-2-1").className = "tabcontent hide";
		document.getElementById("tabs-3-1").className = "tabcontent";
		document.getElementById("tabs-4-1").className = "tabcontent hide";

		document.getElementById("tablinkcontainer-1").className = "tablinkcontainer";
		document.getElementById("tablinkcontainer-2").className = "tablinkcontainer";
		document.getElementById("tablinkcontainer-3").className = "tablinkcontainer active";
		document.getElementById("tablinkcontainer-4").className = "tablinkcontainer";

		document.getElementById("tabs-1").className = "tablink hover";
		document.getElementById("tabs-2").className = "tablink hover";
		document.getElementById("tabs-3").className = "tablink";
		document.getElementById("tabs-4").className = "tablink hover";

		 
		//refBook.StartUpdates();
		//document.getElementById("tablecontentbrokerview").innerHTML = "";
		$("#tablecontentbrokerview").empty();
		//resetNanoWindowSize();

	}
	else if(target.id == "tabs-4") //BROKERVIEW
	{
		document.getElementById("tabs-1-1").className = "tabcontent hide";
		document.getElementById("tabs-2-1").className = "tabcontent hide";
		document.getElementById("tabs-3-1").className = "tabcontent hide";
		document.getElementById("tabs-4-1").className = "tabcontent";

		document.getElementById("tablinkcontainer-1").className = "tablinkcontainer";
		document.getElementById("tablinkcontainer-2").className = "tablinkcontainer";
		document.getElementById("tablinkcontainer-3").className = "tablinkcontainer";
		document.getElementById("tablinkcontainer-4").className = "tablinkcontainer active";

		document.getElementById("tabs-1").className = "tablink hover";
		document.getElementById("tabs-2").className = "tablink hover";
		document.getElementById("tabs-3").className = "tablink hover";
		document.getElementById("tabs-4").className = "tablink";

		 resetNanoWindowSize();
		//refBook.StopUpdates();
		//document.getElementById("tablecontentfullview").innerHTML = "";  
		$("#tablecontentfullview").empty();
	}
}

// ----------------- Main Tabs End -----------------------------------














// ----------------- Table Update Start ------------------------------------

//px = "uniqueidPXBID1;66.66" or "uniqueidPXASK1;66.66" 
//sz = "uniqueidSZBID1;123" or "uniqueidSZASK1;123"
//brk = "uniqueidBRKBID1;GT"
//tim = "uniqueidTIMBID1;14:50"
function updateOneDepthLevelFullView(px,sz,brk,tim)
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

	localCache[brky[0]].innerHTML = brky[1];

	var timey = tim.split(";");

	if(!localCache[timey[0]])
		localCache[timey[0]] = document.getElementById(timey[0]);

	localCache[timey[0]].innerHTML = timey[1];

}

//Bpx1 = "uniqueidPXBID1;66.66" 
//Bsz1 = "uniqueidSZBID1;123"
//Bbrk1 = "uniqueidBRKBID1;GT"
//Btim1 = "uniqueidTIMBID1;14:50"

//Bpx2 = "uniqueidPXBID2;66.30" 
//Bsz3 = "uniqueidSZBID2;123"
//Bbrk2 = "uniqueidBRKBID2;GT"
//Btim2 = "uniqueidTIMBID2;14:50"


//Apx1 = "uniqueidPXASK1;66.66" 
//Asz1 = "uniqueidSZASK1;123"
//Abrk1 = "uniqueidBRKASK1;GT"
//Atim1 = "uniqueidTIMASK1;14:50"

function updateEntireDepthFullView(Bpx1,Bsz1,Bbrk1,Btim1,         
								   Bpx2,Bsz2,Bbrk2,Btim2,
								   Bpx3,Bsz3,Bbrk3,Btim3,
								   Bpx4,Bsz4,Bbrk4,Btim4,
								   Bpx5,Bsz5,Bbrk5,Btim5,
								   Apx1,Asz1,Abrk1,Atim1,
								   Apx2,Asz2,Abrk2,Atim2,
								   Apx3,Asz3,Abrk3,Atim3,
								   Apx4,Asz4,Abrk4,Atim4,
								   Apx5,Asz5,Abrk5,Atim5)
{

	var localCache = cache; 



}


// function updateDepth(bb1,bb2,bb3,bb4,bb5, aa1, aa2, aa3, aa4, aa5)
// {
// 	var pbb1 = bb1.split(";");
// 	var pbb2 = bb2.split(";");
// 	var pbb3 = bb3.split(";");
// 	var pbb4 = bb4.split(";");
// 	var pbb5 = bb5.split(";");
// //	var pbb6 = bb6.split(",");

// 	document.getElementById(pbb1[0]).innerHTML = pbb1[1];
// 	document.getElementById(pbb2[0]).innerHTML = pbb2[1];
// 	document.getElementById(pbb3[0]).innerHTML = pbb3[1];
// 	document.getElementById(pbb4[0]).innerHTML = pbb4[1];
// 	document.getElementById(pbb5[0]).innerHTML = pbb5[1];
// //	document.getElementById(pbb6[0]).innerHTML = pbb6[1];

// 	var paa1 = aa1.split(";");
// 	var paa2 = aa2.split(";");
// 	var paa3 = aa3.split(";");
// 	var paa4 = aa4.split(";");
// 	var paa5 = aa5.split(";");
// //	var pbb6 = bb6.split(",");

// 	document.getElementById(paa1[0]).innerHTML = paa1[1];
// 	document.getElementById(paa2[0]).innerHTML = paa2[1];
// 	document.getElementById(paa3[0]).innerHTML = paa3[1];
// 	document.getElementById(paa4[0]).innerHTML = paa4[1];
// 	document.getElementById(paa5[0]).innerHTML = paa5[1];
// }

function updatePricesClone(bid,ask)
{
	var localCache = cache; 
	var biddy = bid.split(";");
	var asky  = ask.split(";");

	//if(!localCache[biddy[0]])
	//	localCache[biddy[0]] = document.getElementById(biddy[0]);

	//if(!localCache[asky[0]])
	//	localCache[asky[0]] = document.getElementById(asky[0]);


	//var parent = localCache[biddy[0]].parentNode;
	var parent = document.getElementById(biddy[0]).parentNode;
	var newparent = parent.cloneNode(true);

	newparent.children.namedItem(biddy[0]).innerHTML = biddy[1];
	newparent.children.namedItem(asky[0]).innerHTML  = asky[1];
			
	parent.parentNode.replaceChild(newparent,parent);

}

function throttle(fn, delay) 
{
  	var timer = null;
  	return function () 
  	{
    	var context = this, args = arguments;
    	clearTimeout(timer);
    	timer = setTimeout(function () 
    	{
      		fn.apply(context, args);
      		//fn.apply();
    	}, delay);
	};
}

var tempfunc = throttle(function(bid)
{
	$("#testcontent").html(bid);
},2000);

function pricethrottling(bid)
{
	$("#testcontent2").html(bid);
	tempfunc(bid,2000)
}

function updatePricesOnUpdateWithCachingBidAskCheckPriceDuplicate(bid,ask)
{
	var localCache = cache; 

	if (bid != null)
	{
		var biddy = bid.split(";");
		
		if(!localCache[biddy[0]])
			localCache[biddy[0]] = document.getElementById(biddy[0]);

		if(localCache[biddy[0]].innerHTML != biddy[1])
			localCache[biddy[0]].innerHTML = biddy[1];
	}
	if (ask != null)
	{
		var asky = ask.split(";");
		//document.getElementById(asky[0]).innerHTML = asky[1];

		if(!localCache[asky[0]])
			localCache[asky[0]] = document.getElementById(asky[0]);

		if(localCache[asky[0]].innerHTML != asky[1])
			localCache[asky[0]].innerHTML = asky[1];
		
	}
	
}

function updatePricesOnUpdateWithCachingBidAsk(bid,ask)
{
	var localCache = cache; 

	if (bid != null)
	{
		var biddy = bid.split(";");
		//document.getElementById(biddy[0]).innerHTML = biddy[1];
		if(!localCache[biddy[0]])
			localCache[biddy[0]] = document.getElementById(biddy[0]);

		localCache[biddy[0]].innerHTML = biddy[1];
	}
	if (ask != null)
	{
		var asky = ask.split(";");
		//document.getElementById(asky[0]).innerHTML = asky[1];

		if(!localCache[asky[0]])
			localCache[asky[0]] = document.getElementById(asky[0]);

		localCache[asky[0]].innerHTML = asky[1];
	}
	
}

// ----------------- Table Update End ------------------------------------



// function updatePricesOnUpdateWithCaching(btime,bbrkr,bsize,bid,ask,asize,abrkr,atime,byield,ayield,bduration,aduration,bzspread,azspread)
// {

// 	//CLZ0BID,80.47 CLZ0ASK,84.79
// 	//bid = "CLZ0BID,80.47";
// 	//ask = "CLZ0ASK,84.79";

// 	if (btime != null)
// 	{
// 		var bidtime = btime.split(",");

// 		if(!cache[bidtime[0]])
// 			cache[bidtime[0]] = document.getElementById(bidtime[0]);

// 		cache[bidtime[0]].innerHTML = bidtime[1];
// 	}
// 	if (bbrkr != null)
// 	{
// 		var bbroker = bbrkr.split(",");

// 		if(!cache[bbroker[0]])
// 			cache[bbroker[0]] = document.getElementById(bbroker[0]);

// 		cache[bbroker[0]].innerHTML = bbroker[1];
// 	}
// 	if (bsize != null)
// 	{
// 		var bidsize = bsize.split(",");

// 		if(!cache[bidsize[0]])
// 			cache[bidsize[0]] = document.getElementById(bidsize[0]);

// 		cache[bidsize[0]].innerHTML = bidsize[1];
// 	}
// 	if (bid != null)
// 	{
// 		var biddy = bid.split(",");

// 		if(!cache[biddy[0]])
// 			cache[biddy[0]] = document.getElementById(biddy[0]);

// 		cache[biddy[0]].innerHTML = biddy[1];
// 	}
// 	if (ask != null)
// 	{
// 		var asky = ask.split(",");

// 		if(!cache[asky[0]])
// 			cache[asky[0]] = document.getElementById(asky[0]);

// 		cache[asky[0]].innerHTML = asky[1];
// 	}
// 	if (asize != null)
// 	{
// 		var asizey = asize.split(",");

// 		if(!cache[asizey[0]])
// 			cache[asizey[0]] = document.getElementById(asizey[0]);

// 		cache[asizey[0]].innerHTML = asizey[1];
// 	}
// 	if (abrkr != null)
// 	{
// 		var abroker = abrkr.split(",");

// 		if(!cache[abroker[0]])
// 			cache[abroker[0]] = document.getElementById(abroker[0]);

// 		cache[abroker[0]].innerHTML = abroker[1];
// 	}
// 	if (atime != null)
// 	{
// 		var asktime = atime.split(",");

// 		if(!cache[asktime[0]])
// 			cache[asktime[0]] = document.getElementById(asktime[0]);

// 		cache[asktime[0]].innerHTML = asktime[1];
// 	}
// 	if (byield != null)
// 	{
// 		var bidyield = byield.split(",");

// 		if(!cache[bidyield[0]])
// 			cache[bidyield[0]] = document.getElementById(bidyield[0]);

// 		cache[bidyield[0]].innerHTML = bidyield[1];
// 	}
// 	if (ayield != null)
// 	{
// 		var askyield = ayield.split(",");

// 		if(!cache[askyield[0]])
// 			cache[askyield[0]] = document.getElementById(askyield[0]);

// 		cache[askyield[0]].innerHTML = askyield[1];
// 	}
// 	if (bduration != null)
// 	{
// 		var bidduration = bduration.split(",");

// 		if(!cache[bidduration[0]])
// 			cache[bidduration[0]] = document.getElementById(bidduration[0]);

// 		cache[bidduration[0]].innerHTML = bidduration[1];
// 	}
// 	if (aduration != null)
// 	{
// 		var askduration = aduration.split(",");

// 		if(!cache[askduration[0]])
// 			cache[askduration[0]] = document.getElementById(askduration[0]);

// 		cache[askduration[0]].innerHTML = askduration[1];
// 	}
// 	if (bzspread != null)
// 	{
// 		var bidzspread = bzspread.split(",");

// 		if(!cache[bidzspread[0]])
// 			cache[bidzspread[0]] = document.getElementById(bidzspread[0]);

// 		cache[bidzspread[0]].innerHTML = bidzspread[1];
// 	}
// 	if (azspread != null)
// 	{
// 		var askzspread = azspread.split(",");

// 		if(!cache[askzspread[0]])
// 			cache[askzspread[0]] = document.getElementById(askzspread[0]);

// 		cache[askzspread[0]].innerHTML = askzspread[1];
// 	}
// }











































