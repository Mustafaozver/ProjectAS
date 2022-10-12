((ATA)=>{
	ATA.isReady = true;
	ATA.isDebug = false;
	ATA.isMaster = true;
	const server = ATA.Require("./server");

})(require("./src/ATA")());