import Image from "next/image";
import styles from "../../styles/Success.module.css"

function Success() {
  return (
    <>
      <div className="container">
        <header className={styles.header}>
          <h1>Donate.</h1>
          <div>
            <Image src="/donateheader.png" alt="" width={150} height={150} />
          </div>
        </header>
      </div>
      <main className={styles.main}>
        <div className="container">
          <div className={styles.content}>
            <h2>Thank You For Your Donation.</h2>
            <Image
              src={"/helping-hand.png"}
              alt="helping hand"
              width={657}
              height={518}
            />
            <button>Generate Receipt</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Success;
