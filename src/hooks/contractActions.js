export async function checkWithdraws(account, contract) {
  try {
    const withdraws = await contract?.methods
      .pendingWithdrawals(account)
      .call();

    return withdraws;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function checkBearSaleStatus(id, contract) {
  try {
    const saleStatus = await contract?.methods.bearsOfferedForSale(id).call();

    return saleStatus;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function checkBearBidStatus(id, contract) {
  try {
    const bidStatus = await contract?.methods.bearBids(id).call();

    return bidStatus;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getBearOwner(id, contract) {
  try {
    const owner = await contract?.methods.bearIndexToAddress(id).call();

    return owner;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function quitBearSale(id, contract, account) {
  try {
    const quitBear = await await contract?.methods
      .bearNoLongerForSale(id)
      .send({ from: account });

    return quitBear;
  } catch (error) {
    throw new Error(error.message);
  }
}
