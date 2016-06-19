var appRouter = function(app) {
    var parseString = require('xml2js').parseString;
    var mongodb = require("mongodb");
//	var Web3 = require('web3');
//	var web3 = new Web3();
//	web3.setProvider(new web3.providers.HttpProvider("http://54.237.203.15:8545"));
	
	console.log("this is after setProvider");
	var MongoClient = mongodb.MongoClient;
	var url = 'mongodb://localhost:27017/collateral';
	var portfolios = 'portfolios';
    
    
/*Used to create a new basic CSA - One time call*/
	//Response:
	//    {"minCallAmt":"23", "minReleaseAmt":"34", "roundingAmt":"44"}
	app.post("/createNewCsa", function(req, res) {
		
		console.log(req.body.minCallAmt);
        console.log(req.body.minReleaseAmt);
        console.log(req.body.roundingAmt);
        console.log(req.body.roundingDirection);
//@TODO - CREATE CSA IN HYPERLEDGER
		res.status(200).send({ msg: "Basic CSA created"});
	});

    
/*Used to get CSA details*/
	app.get("/getCsaDetails", function(req, res) {

		var fromLedger = {
			"key1": "val",
			"key2": "val2"
		}
//@TODO - GET CSA DETAILS FROM HYPERLEDGER
		res.send(fromLedger);
	});
    
    
/*Used to parse an XML and post its content*/
    app.post("/uploadTrade", function(req, res) {

        var xml = req.body;
        if(xml){
		        parseString(xml, function (err, result) {
	            console.log(result);
                    console.log(result.portfolio[0]);
                    for(i=0; i<=2; i++) {
                        console.log(result.portfolio.trade[i]);
                            console.log(result.portfolio.trade[i].tradeid[0]);
                            console.log(result.portfolio.trade[i].ticket[0]);
                            console.log(result.portfolio.trade[i].counterparty[0]);
                            console.log(result.portfolio.trade[i].dealdate[0]);
                            console.log(result.portfolio.trade[i].dealer[0]);
                            console.log(result.portfolio.trade[i].receive[0]);
                                console.log(result.portfolio.trade[i].receive[0].book[0]);
                                console.log(result.portfolio.trade[i].receive[0].currency[0]);
                                console.log(result.portfolio.trade[i].receive[0].principal[0]);
                                console.log(result.portfolio.trade[i].receive[0].startdate[0]);
                                console.log(result.portfolio.trade[i].receive[0].enddate[0]);
                                console.log(result.portfolio.trade[i].receive[0].fixedfloating[0]);
                                console.log(result.portfolio.trade[i].receive[0].referencerate[0]);
                                console.log(result.portfolio.trade[i].receive[0].fixingsmade[0]);
                                console.log(result.portfolio.trade[i].receive[0].floatingoffset[0]);
                                console.log(result.portfolio.trade[i].receive[0].fixedrate[0]);
                                console.log(result.portfolio.trade[i].receive[0].resetperiod[0]);
                                console.log(result.portfolio.trade[i].receive[0].yieldbasis[0]);
                                console.log(result.portfolio.trade[i].receive[0].compounding[0]);
                                console.log(result.portfolio.trade[i].receive[0].marketconv[0]);
                            console.log(result.portfolio.trade[i].pay[0]);
                                console.log(result.portfolio.trade[i].pay[0].book[0]);
                                console.log(result.portfolio.trade[i].pay[0].currency[0]);
                                console.log(result.portfolio.trade[i].pay[0].principal[0]);
                                console.log(result.portfolio.trade[i].pay[0].startdate[0]);
                                console.log(result.portfolio.trade[i].pay[0].enddate[0]);
                                console.log(result.portfolio.trade[i].pay[0].fixedfloating[0]);
                                console.log(result.portfolio.trade[i].pay[0].referencerate[0]);
                                console.log(result.portfolio.trade[i].pay[0].fixingsmade[0]);
                                console.log(result.portfolio.trade[i].pay[0].floatingoffset[0]);
                                console.log(result.portfolio.trade[i].pay[0].fixedrate[0]);
                                console.log(result.portfolio.trade[i].pay[0].resetperiod[0]);
                                console.log(result.portfolio.trade[i].pay[0].yieldbasis[0]);
                                console.log(result.portfolio.trade[i].pay[0].compounding[0]);
                                console.log(result.portfolio.trade[i].pay[0].marketconv[0]);
                    };
        	});
//            parseString(xml, function (err, result) {
//                console.dir(JSON.stringify(result));
//            });
		}
////@TODO - UPLOAD TRADE IN HYPERLEDGER
    	res.status(200).end();

    });		

    
/*Used to parse an XML and return its content*/
    app.get("/getTradeDetails2", function(req, res) {

//		console.log("recieved from client" + req.body);
//        var xml = req.body;
//        var fromLedger = {
//			"key1": "val",
//			"key2": "val2"
//		}
        
//@TODO - GET TRADE FROM HYPERLEDGER
//      var id = req.params.tradeId;
//		
//		retContr = getContract(id);
//        
//      var startDt = retContr.getStartDt();
//		var endDt = retContr.getEndDt();
//		var duration = retContr.getDuration();
//		var excessOfLaw = retContr.getExcessOfLaw();
//		var premium = retContr.getPremium();
//		var limit = retContr.getLimit();
//		var quotaShare = retContr.getQuotaShare();
//		var productLine = retContr.getProductLine();

		var trade = new Object();
		trade.ticket = "ticket";
		trade.counterparty = "counterparty";
		trade.dealdate = "dealdate";
		trade.dealer = "dealer";
		trade.receive = "receive";
		trade.book = "book";
		trade.currency = "currency";
		trade.principal = "principal";
		trade.startdate = "startdate";
        trade.enddate = "enddate";
		trade.fixedfloating = "fixedfloating";
		trade.referencerate = "referencerate";
		trade.fixingsmade = "fixingsmade";
		trade.floatingoffset = "floatingoffset";
		trade.fixedrate = "fixedrate";
		trade.resetperiod = "resetperiod";
		trade.yieldbasis = "yieldbasis";
		trade.compounding = "compounding";
        trade.marketconv = "marketconv";
        
//@TODO - GET TRADE IN HYPERLEDGER
    	res.send(JSON.stringify(trade));
    });
    
    
//COPIED FROM REINSURANCE    
    app.get("/getTradeDetails/:tradeId?", function(req, res) {

		var r_tradeId = req.params.tradeId;
		console.log("Message: " + r_tradeId);
//		retContr = getContract(id);
//
//		var startDt = retContr.getStartDt();
//		var endDt = retContr.getEndDt();
//		var duration = retContr.getDuration();
//		var excessOfLaw = retContr.getExcessOfLaw();
//		var premium = retContr.getPremium();
//		var limit = retContr.getLimit();
//		var quotaShare = retContr.getQuotaShare();
//		var productLine = retContr.getProductLine();
//
//		var treaty = new Object();
//		treaty.startDt = startDt;
//		treaty.endDt = endDt;
//		treaty.duration = duration;
//		treaty.excessOfLoss = excessOfLaw;
//		treaty.premium = premium;
//		treaty.limit = limit;
//		treaty.quotaShare = quotaShare;
//		treaty.productLine = productLine;
//		treaty.isAccepted = 'FALSE';
            
        var trade = new Object();
		trade.ticket = "ticket";
		trade.counterparty = "counterparty";
		trade.dealdate = "dealdate";
		trade.dealer = "dealer";
        trade.receive = "receive";
		trade.book = "book";
		trade.currency = "currency";
		trade.principal = "principal";
		trade.startdate = "startdate";
        trade.enddate = "enddate";
		trade.fixedfloating = "fixedfloating";
		trade.referencerate = "referencerate";
		trade.fixingsmade = "fixingsmade";
		trade.floatingoffset = "floatingoffset";
		trade.fixedrate = "fixedrate";
		trade.resetperiod = "resetperiod";
		trade.yieldbasis = "yieldbasis";
		trade.compounding = "compounding";
        trade.marketconv = "marketconv";
        trade.tradeId = '';
        trade.status = '';

        if(r_tradeId)
            {
            MongoClient.connect(url, function (err, db) {
	            if (err) {
	                    console.log('Unable to connect to the mongoDB server. Error:', err);
	            } else {
                        console.log('Connection established to', url);
                        var collection = db.collection(portfolios);
                        console.log("Name Col:"+ collection.collectionName);
                        collection.findOne({"tradeid":r_tradeId}, function (err, result) {
                              if (err) {
                                    console.log(err);
                                    res.send(err);
                                }
                                else{
                                    console.log(result); 
//                                    trade.status=result[0].portfolio.trade[0].status;
                                    console.log(trade.status);
                                    res.status(200).send(JSON.stringify(trade));
                                }
                          db.close();
	                    });
	            }
	       });
        }
        else {
            MongoClient.connect(url, function (err, db) {
	            if (err) {
	                    console.log('Unable to connect to the mongoDB server. Error:', err);
	            } else {
                        console.log('Connection established to', url);
                        var collection = db.collection(portfolios);
                        console.log("Name Col:"+ collection.collectionName);
                        collection.find({}).toArray(function (err, result) {
                              if (err) {
                                    console.log(err);
                                    res.send(err);
                                }
                                else{
                                    console.log(result); 
                                    trade.status = result[0].portfolio.trade[0].status;
                                    trade.tradeId = result[0].portfolio.trade[0].tradeid;
                                    console.log(trade.status);
                                    res.status(200).send(JSON.stringify(trade));
                                }
                          db.close();
	                    });
	            }
	     });
        }
    });
} 
module.exports = appRouter;
