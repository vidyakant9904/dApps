import {useWallet, useConnection} from "@solana/wallet-adapter-react"

export function Airdrop() {
    const wallet = useWallet();
    // hook in react
    const {connection} = useConnection();


    async function sendAirdropToUser(){
        const amount = document.getElelmentById("publickey").value
      await connection.requestAirdrop(wallet.publicKey, amount*1000000000)
      alert("Airdroped Sol");
     }
    return <div>    
 <input type="text" placeholder="Amount"></input>
 <button onClick={sendAirdropToUser}> send Airdrop </button>
 
  <h4>  hii mr/mrs.{wallet.publicKey?.toString()}</h4>
    </div>
}
export default Airdrop;