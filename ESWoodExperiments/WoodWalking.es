WoodScene
#ES SETTINGS
RobotModels:WoodRobots.ScoutCutterRobotMem-3
BrainModels:10=WoodRobots.ScoutCutterRobotMem()-G
f:WoodSceneFitnessCounter
#ES
NumberOfGenerations:1000
sigma:0,1
alpha:0,05
SingleStepPopulationSize:20
NumberOfMapIterations:1000
Name:WoodWalkingES
WorkingDir:WoodWalkES
Elitism:false
#F SETTINGS
ValueOfCutWood:0
ValueOfCollision:0
ValueOfDiscoveredTree:10
ValueOfStockedWood:0
ValueOfContaineredWood:0
#MAP SETTINGS 
AmountOfTrees:300
AmountOfWoods:100