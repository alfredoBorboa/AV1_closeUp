			var CLMStatreporter = {

				functionToExecuteForStats:null,
				
				initContext: function(functionToExecuteForStats) {
					CLMStatreporter.functionToExecuteForStats = functionToExecuteForStats;
					window.addEventListener('message', CLMStatreporter.innerReportStats, false);		
				},
				
				innerReportStats: function(e){
					var stats = CLMStatreporter.functionToExecuteForStats();
					console.log('evento: ' + e.data);
					this.parent.postMessage(stats, '*');	
				}		
			}	
