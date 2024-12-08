const Account = require("../../models/Account");

exports.listaccount = async (req, res) => {
  try {
    const accounts = await Account.find();
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ massage: error.massage });
  }
};

exports.createsAccount = async (req, res) => {
  try {
    const newAccount = await Account.create(req.body);
    res.status(201).json(newAccount);
  } catch (error) {
    res.status(500).json({ massage: error.massage });
  }
};
// past create function
// const createsANewAccount = (newAccountData) => {
//     const newId = accounts.length + 1;
//     const newAccount= Object.assign({id:newId},newAccountData);
// return newAccount;
// }

exports.deleteAccount = async (req, res) => {
  const { accountId } = req.params;
  try {
    const account = await Account.findById(accountId);
    if (account) {
      await foundAccount.deleteOne();
      res.status(204).json();
    } else {
      res.status(404).json({ massage: "not found" });
    }
  } catch (error) {
    res.status(500).json({ massage: error.massage });
  }
};
//past delet function
// const deleteAccount=(accountIdDeleted) => {
//     newId=Number(accountIdDeleted);
//     accounts =accounts.filter((accounts) => accounts.id != accountIdDeleted)}

exports.updatAccount = async (req, res) => {
  const { accountId } = req.params;
  try {
    const foundAccount = await Account.findById(accountId);
    if (foundAccount) {
      await foundAccount.updateOne(req.body);
      res.status(200).json({ massage: "account update successfully" });
    } else {
      res.status(404).json();
    }
  } catch (error) {
    res.status(500).json({ massage: error.massage });
  }
};

//past update function
// const updatAccount=(currentAccount, newAccount) =>{
//     const theUpdatedAccount = Object.assign(currentAccount, newAccount)
//     return theUpdatedAccount
// }
