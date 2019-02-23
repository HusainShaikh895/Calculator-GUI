

function getFormattedNumber(num)
{
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}

function getReverseFormattedNumber(num)
{
	return parseInt(num.replace(/,/g, ""));
}

function getHistory()
{
	return document.getElementById("history").innerText;
}

function printHistory(num)
{
	document.getElementById("history").innerText = (num);
}


function getOutput()
{
	return document.getElementById("output").innerText;
}

function printOutput(num)
{
	document.getElementById("output").innerText = getFormattedNumber(num);
}

var operator1 = document.getElementsByClassName("operator");
for(var i=0; i<operator1.length; i++)
{
	operator1[i].addEventListener('click', function(){
		if(this.id == "AllClear")
		{
			printOutput('');
			printHistory('');
		}
		else if(this.id == "CE")
		{
			var output = getReverseFormattedNumber(getOutput()).toString();
			if(output)
			{
				output = output.substr(0, output.length-1);
				printOutput(output);
			}
		}

		/* -----------------broken Code--------------------- */
		else if (this.id == "plus")
		{
			output = getOutput();
			output = output + " + ";
			printHistory(output);
			printOutput(0);
			output2 = getOutput();
			if(this.id=="equal")
			{
				alert("Got here");
			}

		}
		/* ------------------------------------------ */
	})
}

var number1 = document.getElementsByClassName("number");
for(var i=0; i<number1.length; i++)
{
	number1[i].addEventListener('click', function(){
		var output = getReverseFormattedNumber(getOutput());
		if(output!=NaN)
		{
			output = output + this.id;
			printOutput(output);
		}
		
	})
}




















