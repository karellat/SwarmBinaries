WoodScene
#ES SETTINGS
RobotModels:WoodRobots.WoodWorkerRobotMem-2;WoodRobots.ScoutCutterRobotMem-3
BrainModels:10=WoodRobots.WoodWorkerRobotMem()-WoodStockES\[i]thread\best0_WoodWorkerM;WoodRobots.ScoutCutterRobotMem()-WoodCutES\[i]thread\best0_WoodCutterM
f:WoodSceneFitnessCounter
#ES
NumberOfGenerations:4000
sigma:0,1
alpha:0,05
SingleStepPopulationSize:20
NumberOfMapIterations:2000
Name:WoodCoopES
WorkingDir:WoodCoopES
Elitism:false
#F SETTINGS
ValueOfCutWood:100
ValueOfCollision:-1
ValueOfDiscoveredTree:0
ValueOfStockedWood:1000
ValueOfContaineredWood:100
ValueOfContaineredNoWood:-100
#MAP SETTINGS 
AmountOfTrees:400
AmountOfWoods:0

