const configAds = [
	{
		"src":"https://highcpmrevenuenetwork.com/4e/2e/e3/4e2ee3ad51ef531ebbbf6f77ab9b8cce.js",
		"name-element":"script",
		"target-selector":"body"
	},
	{
		"src":"",
		"name-element":"script",
		"target-selector":"body"
	}
];
const initAds = async(config)=>{
	for(let data of config){
		const elInject = document.createElement(data["name-element"]);
		elInject.setAttribute("src",data.src);
		document.querySelector(data["target-selector"]).append(elInject);
	};
};
initAds(configAds);
