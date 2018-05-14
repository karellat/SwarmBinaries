@echo off

echo "All Scenes of wood scene will be started"
echo "WoodCutter Walk should be finnished"
echo "WoodCutter cut started"
start /wait SwarmSimFramework.exe -de DEWoodExperiments/WoodCuttorCutMem.expe "WoodCuttorWalkMemBrain0.json"
echo "WoodWorker Walk started" 
start /wait SwarmSimFramework.exe -de DEWoodExperiments/WoodWorkerWalkMem.expe
echo "WoodWorker Walk finnished"
echo "WoodWorker PickUp started"
start /wait SwarmSimFramework.exe -de DEWoodExperiments/WoodWorkerPickUpMem.expe "WoodWorkerWalkMemBrain0.json"
echo "WoodWorker PickUp finnished"
echo "WoodWorker Stock started"
start /wait SwarmSimFramework.exe -de DEWoodExperiments/WoodWorkerStockItemsMem.expe "WoodWorkerPickUpMemBrain0.json" 
start /wait SwarmSimFramework.exe -de DEWoodExperiments/WoodCooperatitiveFinalMem.expe "WoodCuttorCutMemBrain0.json" "WoodWorkerWoodWorkerStoreBrain0.json"
