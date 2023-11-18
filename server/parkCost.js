function parkcost(enterTime)
{
    var enterHour = enterTime.getHours();
    var enterMinute = enterTime.getMinutes();
    var enterSecond = enterTime.getSeconds();

    var exitTime = new Date();
    console.log("exitTime : ",exitTime);
    var exitHour = exitTime.getHours();
    var exitMinute = exitTime.getMinutes();
    var exitSecond = exitTime.getSeconds();

    //制定收费政策如下，一秒0.5元，超过一分钟时间为一分钟10元，超过一小时为一次收费100元
    if(exitHour-enterHour >= 1)
        return 100;
    
    var MinCost = 0;
    if(exitMinute-enterMinute >= 1)
        MinCost = (exitMinute-enterMinute)*30;

    var SecondCost = (exitSecond-enterSecond)*0.5;
    return MinCost+SecondCost;
}

module.exports = {
    parkcost : parkcost 
};