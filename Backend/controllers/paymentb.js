require("dotenv").config();
var braintree = require("braintree");
const { response } = require("express");

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.merchantId,
  publicKey: process.env.publicKey,
  privateKey: process.env.privateKey,
});

// exports.getToken = (req, res) => {
//   gateway.clientToken.generate({}, function (err, response) {
//     if (err) {
//       res.status(500).json(err);
//     } else {
//       res.send(response);
//     }
//   });
// };

exports.getToken = (req, res) => {
  try {
    gateway.clientToken.generate({}, (err, response) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.send(response);
      }
    });
  } catch (error) {}
};

exports.processPayment = (req, res) => {
  let nonceFromTheClient = req.body.paymentMethodNonce;

  let amountFromTheClient = req.body.amount;
  gateway.transaction.sale(
    {
      amount: amountFromTheClient,
      paymentMethodNonce: nonceFromTheClient,

      options: {
        submitForSettlement: true,
      },
    },
    function (err, result) {
      if (err) {
        res.status(500).json(error);
      } else {
        res.json(result);
      }
    }
  );
};
