@echo off

echo "All Scenes of wood scene will be started"
echo "WoodCutter Walk started"
start /wait SwarmSimFramework.exe -es ESWoodExperiments\WoodWalking.es
echo "WoodCutter Walk finnished"
echo "WoodCutter Cut started"
start /wait SwarmSimFramework.exe -es ESWoodExperiments\WoodCutting.es
echo "WoodCutter Cut finnished"
echo "WoodWorker Walk started" 
start /wait SwarmSimFramework.exe -es ESWoodExperiments\WoodWWalking.es
echo "WoodWorker Walk finnished"
echo "WoodWorker PickUp started"
start /wait SwarmSimFramework.exe -es ESWoodExperiments\WoodPickup.es
echo "WoodWorker PickUp finnished"
echo "WoodWorker Store started"
start /wait SwarmSimFramework.exe -es ESWoodExperiments\WoodStock.es
echo "WoodWorker Store finnished"
echo "WoodWorker Coop started"
start /wait SwarmSimFramework.exe -es ESWoodExperiments\WoodCoop.es
echo "WoodWorker Coop finnished"