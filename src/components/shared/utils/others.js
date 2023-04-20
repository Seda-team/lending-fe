const CreditOracle_abi = [
  {
    "inputs": [
      {
        "internalType": "contract IVerifier",
        "name": "_verifier",
        "type": "address"
      },
      {
        "internalType": "contract IHasher",
        "name": "_hasher",
        "type": "address"
      },
      {
        "internalType": "uint32",
        "name": "_merkleTreeHeight",
        "type": "uint32"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "commitment",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "leafIndex",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timestamp",
        "type": "uint256"
      }
    ],
    "name": "Deposit",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "Withdrawal",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "FIELD_SIZE",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "ROOT_HISTORY_SIZE",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "s",
        "type": "string"
      }
    ],
    "name": "StringToUint",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "ZERO_VALUE",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "commitments",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "commitments_chose",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "currentRootIndex",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_commitment",
        "type": "string"
      }
    ],
    "name": "deposit",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "filledSubtrees",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getLastRoot",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "hasher",
    "outputs": [
      {
        "internalType": "contract IHasher",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "commitment",
        "type": "string"
      }
    ],
    "name": "haveCommitment",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_root",
        "type": "uint256"
      }
    ],
    "name": "isKnownRoot",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "levels",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "nextIndex",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "nullifierHashes",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "roots",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "verifier",
    "outputs": [
      {
        "internalType": "contract IVerifier",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "p",
        "type": "uint256[]"
      },
      {
        "internalType": "string",
        "name": "digest",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "amount",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "balance",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "liquidition",
        "type": "string"
      },
      {
        "internalType": "uint256[]",
        "name": "op",
        "type": "uint256[]"
      },
      {
        "internalType": "string",
        "name": "commitment",
        "type": "string"
      }
    ],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "i",
        "type": "uint256"
      }
    ],
    "name": "zeros",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  }
] ;      

const fetchData = async(data, url) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(data)
  };

  let json_respon = await fetch(url, requestOptions)
  let res = await json_respon.json()
  return res
}

class SparseMerkleTree {
  /*
   * Constructs a new sparse merkle tree.
   * This is an insert-only set which is reprented by a single 
   *
   * depth: the number of non-root layers in the tree
   *
   * Note: for the purposes of computing the digest of the tree, unoccupied nodes should be taken to have value `0n`.
   */
  constructor(depth) {
      this.depth = depth;
      this.defaults = ["0"];
      while (this.defaults.length < depth + 1) {
          const last = this.defaults[this.defaults.length - 1];
          this.defaults.push(window.mimc2(last, last));
      }
      this.defaults.reverse();
      this.nodes = {};
      this.leaf_indices = {};
      this.next_index = 0;
  }       

  /*
   * Returns the merkle digest of the tree.
   * A string.
   */
  get digest() {
      return this.node(0, 0);
  }

  /*
   * Adds an item to the merkle tree, in the next open leaf.
   * Asserts the novelty of the item.
   * Asserts that there is space for the item.
   */
  insert(item) {
      item = item.toString();
      //assert.ok(this.next_index < 2 ** this.depth);
      let index = this.next_index++;
      this.leaf_indices[item] = index;
      this.nodes[[this.depth, index]] = item;
      let level = this.depth;
      while (level > 0) {
          level--;
          index = Math.floor(index / 2);
          const left = this.node(level + 1, 2 * index);
          const right = this.node(level + 1, 2 * index + 1);
          this.nodes[[level, index]] = window.mimc2(left, right);
      }
  }

  /*
   * For an item in the merkle tree, return the path for that item.
   * The path is an array of (sibling, direction) pairs where
   * the sibling is the hash at a node adjacent to the path
   * the direction is a boolean indicating whether that sibling is to the left of the path
   * and the first sibling in the array is the sibling of the **leaf** with item.
   * (i.e. the path goes from the leaf to the root)
   *
   * Note that the path has length equal to the depth.
   * Note that the root of the tree is **not** in the path.
   */
  path(item) {
      let index = this.leaf_indices[item];
      let level = this.depth;
      let path = [];
      while (level > 0) {
          const direction = !!(index & 1);
          level--;
          index = Math.floor(index / 2);
          const sibling = this.node(level + 1, 2 * index + (1 - direction));
          path.push([sibling, direction]);
      }
      return path;
  }

  node(level, index) {
      if ([level, index] in this.nodes) {
          return this.nodes[[level, index]];
      } else {
          return this.defaults[level];
      }
  }

}

async function createDeposit(amount, balance, liquidation,op1,op2,op3,nonce) {
  let deposit = { amount, balance, liquidation,op1,op2,op3,nonce }
  
  const commitment1 = window.mimc2(deposit.amount, deposit.balance);
  const commitment2 = window.mimc2(commitment1,deposit.liquidation);
  const commitment3 = window.mimc2(commitment2,op1);
  const commitment4 = window.mimc2(commitment3,op2);
  const commitment5 = window.mimc2(commitment4,op3);
  const commitment6 = window.mimc2(commitment5,nonce);
  deposit.commitment = commitment6;
  
  //console.log(await deposit.time);
  return deposit;
}

async function deposit(amount, balance, liquidation,op1,op2,op3, CreditOracle_contract, address) {
  try {
    const _deposit = await createDeposit(amount, balance, liquidation,op1,op2,op3,Math.floor(Math.random() * 1000) + 1);
 
    const have_commitment = await CreditOracle_contract.methods.haveCommitment(_deposit.commitment.toString()).call();;
    
    if (have_commitment == true) {
      _deposit = await createDeposit(amount, balance, liquidation,op1,op2,op3,Math.floor(Math.random() * 1000) + 1);
    } 
    
    await CreditOracle_contract.methods.deposit(_deposit.commitment.toString()).send({from : address });
    _deposit.note  = `bcrefier-proof-${_deposit.amount}-${_deposit.balance}-${_deposit.liquidation}-${_deposit.op1}-${_deposit.op2}-${_deposit.op3}-${_deposit.nonce}`; 
    
    return _deposit
  }
  catch (err) {
    return null
  }
}

async function parseNote(noteString) {
  const noteRegex = /bcrefier-proof-(?<amount>[\d.]+)-(?<balance>[\d.]+)-(?<liquidation>[\d.]+)-(?<op1>[\d.]+)-(?<op2>[\d.]+)-(?<op3>[\d.]+)-(?<nonce>\w+)/g; 
  const match = noteRegex.exec(noteString)
  //console.log(match.groups.netId);
  //console.log(match.rank);
  //console.log(rank);
  // const match = noteRegex.exec(noteString)

  // // we are ignoring `currency`, `amount`, and `netId` for this minimal example
  // const buf = Buffer.from(match.groups.note, 'hex')
   const amount = match.groups.amount;
   const balance = match.groups.balance;
   const liquidation = match.groups.liquidation;
   const nonce = match.groups.nonce;
   const op1 = match.groups.op1;
   const op2 = match.groups.op2;
   const op3 = match.groups.op3;
   return createDeposit(amount, balance, liquidation,op1,op2,op3,nonce);
}

async function generateMerkleProof(deposit, CreditOracle_contract, address) {
  console.log('Getting contract state...')
  const events = await CreditOracle_contract.getPastEvents('Deposit', { fromBlock: 0, toBlock: 'latest' })

  const leaves = events
    .sort((a, b) => a.returnValues.leafIndex - b.returnValues.leafIndex) // Sort events in chronological order
    .map((e) => e.returnValues.commitment)
  
  const sender = events
    .sort((a, b) => a.returnValues.leafIndex - b.returnValues.leafIndex) // Sort events in chronological order
    .map((e) => e.returnValues.sender)

  for (var i = 0;i < sender.length; i++) {
    if (deposit.commitment == leaves[i]) {
      if (sender[i].toLowerCase() != address) {
        return null;
      }
    }
  }
  const snark_input = await  computeInput(10,leaves,deposit.amount,deposit.balance,deposit.liquidation,deposit.op1,deposit.op2,deposit.op3,deposit.nonce);
  // Find current commitment in the tree
  return snark_input;
}

function computeInput(depth,transcript,amount, balance, liquidition,op1,op2,op3, nonce) {
  // TODO
  var sparse_merkle_tree = new SparseMerkleTree(depth);

  var wanted_coin_and_nonce = null;

  const commitment1 = window.mimc2(amount,balance);
  const commitment2 = window.mimc2(commitment1,liquidition);
  const commitment3 = window.mimc2(commitment2,op1);
  const commitment4 = window.mimc2(commitment3,op2);
  const commitment5 = window.mimc2(commitment4,op3);
  const commitment6 = window.mimc2(commitment5,nonce);

  for (var i = 0;i < transcript.length; i++) {
    const coin =  transcript[i] ; 
    sparse_merkle_tree.insert(coin);
    if(transcript[i] === commitment6) wanted_coin_and_nonce = [coin , nonce];
  }

  if ( wanted_coin_and_nonce === null) return null;
  const merkle_proof = sparse_merkle_tree.path(wanted_coin_and_nonce[0]);
  
  var snark_input = {
    "digest": sparse_merkle_tree.digest,
    "amount": amount,
    "balance": balance,
    "liquidition": liquidition,
    "nonce": nonce,
    "op1": op1,
    "op2": op2,
    "op3": op3,
};

  snark_input["sibling"] = [];
  snark_input["direction"] = [];
  for(var i = 0; i < depth; i++) {
      snark_input["sibling"].push(merkle_proof[i][0]);
  const direction = merkle_proof[i][1] ? "1" : "0";
  snark_input["direction"].push(direction);
  }
  return snark_input;
}

async function withdraw(note, CreditOracle_contract, address, web3) {
  const deposit = await parseNote(note);
  //console.log(deposit);
  // Compute merkle proof of our commitment
  let input = await generateMerkleProof(deposit, CreditOracle_contract, address)
  console.log(input);

  // Prepare circuit inpu
  if (input == null) return false;
  const {proof , publicSignals } = await window.snarkjs.groth16.fullProve(
    input, 
    "spend.wasm",
    "spend_final.zkey"
    );
    
  const proofData = proof ;

  proofData.publicSignals = publicSignals;

  console.log('Sending withdrawal transaction...')

  const proofInputToSolidity = toSolidityInput(proofData);
  console.log(proofData)
  const p = [];
  p.push(await web3.eth.abi.decodeParameter('uint',proofInputToSolidity["pi_a"][0]));
  p.push(await web3.eth.abi.decodeParameter('uint',proofInputToSolidity["pi_a"][1]));
  p.push(await web3.eth.abi.decodeParameter('uint',proofInputToSolidity["pi_b"][0][0]));
  p.push(await web3.eth.abi.decodeParameter('uint',proofInputToSolidity["pi_b"][0][1]));
  p.push(await web3.eth.abi.decodeParameter('uint',proofInputToSolidity["pi_b"][1][0]));
  p.push(await web3.eth.abi.decodeParameter('uint',proofInputToSolidity["pi_b"][1][1]));
  p.push(await web3.eth.abi.decodeParameter('uint',proofInputToSolidity["pi_c"][0]));
  p.push(await web3.eth.abi.decodeParameter('uint',proofInputToSolidity["pi_c"][1]));
  const op = [];
  op.push(input.op1);
  op.push(input.op2);
  op.push(input.op3);
  //  // console.log(web3.eth.abi.decodeParameter('uint[][]',proofInputToSolidity["pi_b"]));
 
  //   //console.log(await web3.utils.hexToNumber(proofInputToSolidity.publicSignals[1]));
 
  try {
    const tx = await CreditOracle_contract.methods.withdraw(p,input.digest,input.amount,input.balance,input.liquidition,op,deposit.commitment).send({from: address});
  } catch {
    return false
  } 
  return true
}

  
function toSolidityInput(proof) {
  const result = {
      pi_a: [proof.pi_a[0], proof.pi_a[1]],
      pi_b: [[proof.pi_b[0][1], proof.pi_b[0][0]], [proof.pi_b[1][1], proof.pi_b[1][0]]],
      pi_c: [proof.pi_c[0], proof.pi_c[1]],
  };
  if (proof.publicSignals) {
      result.publicSignals = proof.publicSignals;
  }
  return hexifyBigInts(unstringifyBigInts(result));
}

function unstringifyBigInts(o) {
  if ((typeof(o) == "string") && (/^[0-9]+$/.test(o) ))  {
      return window.bigInt(o);
  } else if (Array.isArray(o)) {
      return o.map(unstringifyBigInts);
  } else if (typeof o == "object") {
      const res = {};
      for (let k in o) {
          res[k] = unstringifyBigInts(o[k]);
      }
      return res;
  } else {
      return o;
  }
}

function hexifyBigInts(o) {
  if (typeof (o) === "bigInt" || (o instanceof window.bigInt)) {
      let str = o.toString(16);
      while (str.length < 64) str = "0" + str;
      str = "0x" + str;
      return str;
  } else if (Array.isArray(o)) {
      return o.map(hexifyBigInts);
  } else if (typeof o == "object") {
      const res = {};
      for (let k in o) {
          res[k] = hexifyBigInts(o[k]);
      }
      return res;
  } else {
      return o;
  }
}


module.exports = {
  fetchData,
  deposit,
  withdraw
}
