WoodScene
#ES SETTINGS
RobotModels:WoodRobots.WoodWorkerRobotMem-4;WoodRobots.ScoutCutterRobotMem-5
BrainModels:10=WoodRobots.WoodWorkerRobotMem()-WoodStockES\[i]thread\best0_WoodWorkerM;WoodRobots.ScoutCutterRobotMem()-WoodCutES\[i]thread\best0_WoodCutterM
f:WoodSceneFitnessCounter
#ES
NumberOfGenerations:3000
sigma:0,1
alpha:0,05
SingleStepPopulationSize:20
NumberOfMapIterations:1500
Name:WoodCoopES
WorkingDir:WoodCoopES
Elitism:false
#F SETTINGS
ValueOfCutWood:0
ValueOfCollision:0
ValueOfDiscoveredTree:0
ValueOfStockedWood:1000
ValueOfContaineredWood:10
ValueOfContaineredNoWood:0
#MAP SETTINGS 
AmountOfTrees:400
AmountOfWoods:0

