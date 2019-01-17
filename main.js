let asd45 = [
	{
		q: "Bezeztrátová komprese (2 správně)",
		a: [
			"komprimovaný soubor lze opačným postupem rekonstruovat do původní podoby",
			"má nižší kompresní poměr než ztrátová"
		]
	},
	{
		q: "Soubory MPEG layer 2 mají koncovku:",
		a: [
			"*.mp2"
		]
	},
	{
		q: "MPEG layer 3 využívá",
		a: [
			"model Temporal Masking"
		]
	},
	{
		q: "Datový tok MPEG layer1 má rychlost",
		a: [
			"od 32 kb/s do 448 kb/s"
		]
	},
	{
		q: "MPEG layer2 má datový tok:",
		a: [
			"od 32 kb/s do 384 kb/s"
		]
	},
	{
		q: "Komprese  ztrátového modelu, která je založena na principu vynechání detailů, jež jsou pro lidské ucho nepostižitelné, se nazývá: (vyber 2)",
		a: [
			'"perceptual noise shaping" v oblasti dynamického rozsahu',
			'"perceptual subband transform coding" v oblasti frekvenčního rozsahu'
		]
	},
	{
		q: "Úkolem komprese dat je: (2 správně)",
		a: [
			"zmenšit potřebný úložný prostor",
			"zmenšit datový tok"
		]
	},
	{
		q: "MPEG layer 2 pracuje s metodou",
		a: [
			"*.mp2"
		]
	},
	{
		q: "Bezeztrátová komprese (2 správně)",
		a: [
			"komprimovaný soubor lze opačným postupem rekonstruovat do původní podoby",
			"má nižší kompresní poměr než ztrátová"
		]
	},
	{
		q: "MPEG layer 2 pracuje s metodou",
		a: [
			"Temporal Masking"
		]
	},
	{
		q: "Kompresní poměr MPEG layer 3 při CD kvalitě dosahuje:",
		a: [
			"12:1"
		]
	},
	{
		q: "Co je to kodek? (vyber dvě)",
		a: [
			"zařízení, které transformuje datový proud",
			"program, který transformuje datový proud"
		]
	},
	{
		q: "Při kompresi s běžnou rychlostí vzorkování (128kbps) signálu má:",
		a: [
			"soubor mp3 přibližně 10x menší velikost, než soubor WAV"
		]
	},
	{
		q: "Datový tok MPEG layer 3 je",
		a: [
			"32 kb/s do 320 kb/s"
		]
	},
	{
		q: "Ztrátová komprese (vyber dvě)",
		a: [
			"informace nelze kompletně rekonstruovat",
			"používá se pro kompresi zvuku a obrazu"
		]
	},
	{
		q: "MPEG layer 2 pracuje",
		a: [
			"se třemi frame najednou"
		]
	},
	{
		q: "Proces komprese (vyber dvě)",
		a: [
			"může provádět specielní hardware",
			"zatěžuje procesor počítače"
		]
	},
	{
		q: "MPEG layer1 metoda pracuje",
		a: [
			"s jedním frame najednou"
		]
	},
	{
		q: "MPEG layer 3 využívá",
		a: [
			"redukce vazeb mezi stereo signály"
		]
	},
	{
		q: "Layer 1 formátu MPEG využívá při kompresi zvuku model:",
		a: [
			"pouze Frequency Masking"
		]
	},
	{
		q: "Při kompresi signálu bílého šumu má frekvenčí spektrum",
		a: [
			"utlumené vysoké frekvence"
		]
	},
	{
		q: "Kompresní poměr je:",
		a: [
			"poměr velikosti dat před a po kompresi"
		]
	},
	{
		q: 'Metoda komprese "Temporal Masking" je založena na jevu',
		a: [
			"setrvačnost vjemu zvuku"
		]
	},
	{
		q: 'Metoda komprese "Frequency Masking" využívá jevu:',
		a: [
			"lidské ucho není schopno rozlišit v přítomnosti silného signálu signál slabší"
		]
	}
];

let asd56, asd57, asd59, asd60;

asd56 = document.createElement("div");
document.body.appendChild(asd56);
asd56.style.width = "300px";
asd56.style.padding = "10px";
asd56.style.position = "fixed";
asd56.style.backgroundColor = "white";
asd56.style.left = "50vw";
asd56.style.bottom = "-1000px";
asd56.style.transform = "translate(-50%, 0)";
asd56.style.borderRadius = "10px";
asd57 = document.createElement("h4");
asd56.appendChild(asd57);
asd60 = document.createElement("h2");
asd56.appendChild(asd60);
asd59 = document.createElement("p");
asd56.appendChild(asd59);

function asd46(asd47)
{
	let asd49 = [];

	for(let asd48 = 0; asd48 < asd45.length; asd48++)
	{
		if(asd45[asd48].q == asd47) 
		{
			for(let asd50 = 0; asd50 < asd45[asd48].a.length; asd50++)
			{
				asd49.push(asd45[asd48].a[asd50]);
			}
		}
	}

	return asd49;
}

function asd51()
{
	let asd52 = document.querySelectorAll(".answ_text");
	let asd53 = [];
	let asd55 = asd46(document.querySelector(".div_task_pad div span").innerText);

	for(let asd54 = 0; asd54 < asd52.length; asd54++)
	{
		for(let asd56 = 0; asd56 < asd55.length; asd56++)
		{
			if(asd52[asd54].innerText == asd55[asd56])
			{
				asd53.push(asd54);
			}
		}
	}

	return asd53;
}

document.onkeydown = (e) => {
  	if(e.which == 32)
  	{
  		asd56.style.bottom = "20px";
  		let asd64 = document.querySelectorAll(".div_classic_answer_container");
  		let asd58 = document.querySelector(".div_task_pad div span").innerText;
  		asd59.innerHTML = asd46(document.querySelector(".div_task_pad div span").innerText).join("<br><br>");
  		let asd61 = "";
  		let asd62 = asd51();
  		for(let asd63 = 0; asd63 < asd62.length; asd63++)
  		{
  			if(asd61.indexOf(String.fromCharCode(65+asd62[asd63])) == -1)
  			{
  				asd61 += String.fromCharCode(65+asd62[asd63]) + " ";
  				asd64[asd62[asd63]].style.backgroundColor = "rgba(50,255,50,0.2)";
  			}
  		}
  		asd60.innerText = asd61;
  		asd57.innerText = asd58;
  	}
}

document.onkeyup = (e) => {
  	if(e.which == 32)
  	{
		asd56.style.bottom = "-1000px";
		let asd64 = document.querySelectorAll(".div_classic_answer_container");
		for(let asd63 = 0; asd63 < asd64.length; asd63++)
  		{
  			asd64[asd63].style.backgroundColor = "rgba(50,255,50,0)";
  		}
  	}
}