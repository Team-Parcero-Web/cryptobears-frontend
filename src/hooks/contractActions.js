import Web3 from 'web3';

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
    const quitBear = await contract?.methods
      .bearNoLongerForSale(id)
      .send({ from: account });

    return quitBear;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function withdraw(contract, account) {
  try {
    const withdrawResponse = await contract?.methods
      .withdraw()
      .send({ from: account });
    return withdrawResponse;
  } catch (error) {
    if (error.message.includes('User denied')) {
      return null;
    }
    throw new Error(error.message);
  }
}

export async function offerBearForSale(id, price, contract, account) {
  try {
    const withdrawResponse = await contract?.methods
      .offerBearForSale(id, Web3.utils.toWei(price))
      .send({ from: account });
    return withdrawResponse;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function acceptBidForBear(id, price, contract, account) {
  try {
    const acceptBidResponse = await contract?.methods
      .acceptBidForBear(id, Web3.utils.toWei(price))
      .send({ from: account });
    return acceptBidResponse;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function buyBear(id, price, contract, account) {
  try {
    const buyBearResponse = await contract?.methods
      .buyBear(id)
      .send({ from: account, value: price });
    return buyBearResponse;
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function withdrawBidForBear(id, contract, account) {
  try {
    const withdrawResponse = await contract?.methods
      .withdrawBidForBear(id)
      .send({ from: account });
    return withdrawResponse;
  } catch (error) {
    throw new Error(error.message);
  }
}

export function toWei(amount) {
  return Web3.utils.toWei(amount || '0');
}

export function fromWei(amount) {
  return Web3.utils.fromWei(amount || '0');
}
