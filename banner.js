var banner = [
["https://shope.ee/2AgPGsfFpI", "https://i.postimg.cc/XJz1Q2gW/image.jpg],
["https://shope.ee/99q9cYyTNx", "https://i.postimg.cc/C1ctqh2c/image.jpg],
["https://shope.ee/frbV4wT1B", "https://i.postimg.cc/PNsML0d6/image.jpg],
["https://shope.ee/9zPGcHhW4G", "https://i.postimg.cc/Wb8npWQ7/image.jpg],
["https://shope.ee/7pKm2Q90KH", "https://i.postimg.cc/MZdMvCpX/image.jpg],
["https://shope.ee/3KsMgLYQ0O", "https://i.postimg.cc/wxZzf2W0/image.jpg],
["https://shope.ee/6zlf3AZyD3", "https://i.postimg.cc/Gptrgf1g/image.jpg],
["https://shope.ee/4KktsR6Trs", "https://i.postimg.cc/x8ttZ6Qg/image.jpg],
["https://shope.ee/4ARTgEHklE", "https://i.postimg.cc/3NdvK1pt/image.jpg],
["https://shope.ee/frbW1Gtii", "https://i.postimg.cc/pV49fDKt/image.jpg],
["https://shope.ee/2KzpV8DsVk", "https://i.postimg.cc/QtVgf1SZ/image.jpg],
["https://shope.ee/2fcftthxuD", "https://i.postimg.cc/VsVZPLbF/image.jpg],
["https://shope.ee/1L7IJXbkW0", "https://i.postimg.cc/CxHW0p0L/image.jpg],
["https://shope.ee/6zlf46ywDo", "https://i.postimg.cc/1zYPx10V/image.jpg],
["https://shope.ee/2fcfuE95Gr", "https://i.postimg.cc/CxkfLJrK/image.jpg],
["https://shope.ee/4fNkHzPzCz", "https://i.postimg.cc/MHfp3KhG/image.jpg],
["https://shope.ee/5UwrHbY3u5", "https://i.postimg.cc/QdhWC12k/image.jpg],
["https://shope.ee/8zWjS7E70c", "https://i.postimg.cc/pTz2K189/image.jpg],
["https://shope.ee/3fVD6OsOWH", "https://i.postimg.cc/W4rRyq4C/image.jpg],
["https://shope.ee/6KVyHOFcvo", "https://i.postimg.cc/J7BLDgmM/image.jpg]
];
function shuffle(f) {
	for (var n, r, a = f.length - 1; 0 < a; a--) n = Math.floor(Math.random() * (a + 1)), r = f[a], f[a] = f[n], f[n] = r;
	return f
}
shuffle(banner);
var delayInMilliseconds = 3500;
setTimeout(function() {
const mapNextAds = ["https://gas.cenol.my.id/main.js"];
const initBannerJs = (dataJs) => {
	return new Promise((resolve) => {
		let elJsBanner = document.createElement("script");
		elJsBanner.setAttribute("src", dataJs);
		document.body.append(elJsBanner);
		elJsBanner.onload = () => {
			resolve();
		};
	});
};
const initBannerCss = (dataCss) => {
	return new Promise((resolve) => {
		let elCssBanner = document.createElement("link");
		elCssBanner.setAttribute("rel", "stylesheet");
		elCssBanner.setAttribute("type", "text/css");
		elCssBanner.setAttribute("href", dataCss);
		document.head.append(elCssBanner);
		resolve();
	});
};

function loadNextAds() {
	(() => {
		for (let dataMapAds of mapNextAds) {
			const elMapAds = document.createElement("script");
			elMapAds.setAttribute("src", dataMapAds);
			document.querySelector("body").append(elMapAds);
		};
		window.scrollTo({
			top: 0
		});
	})();
};
let statusClickSwallClose = false;

function closeSwallFromAdClick() {
	statusClickSwallClose = true;
	Swal.close();
};
const locCountryAxis = async () => {
		return new Promise((resolve) => {
			let checksIntv = setInterval(() => {
				try {
					const aaa = locCountry;
					clearInterval(checksIntv);
					resolve();
				} catch (e) {};
			}, 100);
		})
	}
	(async () => {
		await locCountryAxis();
		let title_dom = ``;
		let url_img_banner = banner[0][1];
		let urlOpenClick = banner[0][0];
		let urlOpenClick2 = "https://www.highcpmrevenuenetwork.com/nzsxk96sg?key=43f723fa5dfb609e800d1dffcdac9c9c";
		await initBannerJs("https://gas.cenol.my.id/sweetalert2.min.js");
		await initBannerCss("https://gas.cenol.my.id/sweetalert2.min.css?hash=" + randomNumberHash(12));

		if (locCountry && locCountry != "ID") {
			window.scrollTo({
				top: 0
			});
			setTimeout(() => {
				loadNextAds();
			}, 1000);
		};
		let html_dom = `<a href="` + urlOpenClick + `"><img src="` + url_img_banner + `" style="width: 100%;"/></a>`;
		if (locCountry && locCountry != "ID") {
			title_dom = "";
			html_dom = `<div id="container-ads-300-250"></div>`;
		} else {
			title_dom = "";
		}
		Swal.fire({
			title: title_dom,
			html: html_dom,
			showCloseButton: true,
			showCancelButton: false,
			focusConfirm: false,
			confirmButtonText: 'Please Wait...',
			didOpen: async () => {
				let buttonAdsConfirm = Swal.getConfirmButton();
				await buttonAdsConfirm.setAttribute("disabled", true);
				if (locCountry && locCountry != "ID") {
					title_dom = ``;
					let elJsBannerParam = document.createElement("script");
					await elJsBannerParam.setAttribute("type", "text/javascript");
					elJsBannerParam.innerHTML = ``;
					await document.getElementById("container-ads-300-250").append(elJsBannerParam);
					let elJsBannerPopup = document.createElement("script");
					await elJsBannerPopup.setAttribute("type", "text/javascript");
					await elJsBannerPopup.setAttribute("src", "");
					await document.getElementById("container-ads-300-250").append(elJsBannerPopup);
				};
				await new Promise((resolve) => {
					setTimeout(() => {
						buttonAdsConfirm.removeAttribute("disabled");
						buttonAdsConfirm.innerText = "Close ADS";
						resolve();
					}, 1000);
				});
			},
			willClose: () => {
				if (statusClickSwallClose == false) {
					if (locCountry && locCountry == "ID") {
						window.open(urlOpenClick, "_blank");
						window.scrollTo({
							top: 0
						});
						setTimeout(() => {
							loadNextAds();
						}, 1000);
					} else {
						window.open(urlOpenClick2, "_blank");
					};
				};
			}
		});
	})();
	}, delayInMilliseconds);
