"use client"
import styles from "./page.module.css";
import React from "react";

export default function Home() {
  const [encodedUrl, setEncodedUrl] = React.useState('')
  const [decodedUrl, setDecodedUrl] = React.useState('')

  const decode = (typeEvent: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = typeEvent.target.value
    setEncodedUrl(value)
    setDecodedUrl(decodeURIComponent(value));
  };

  const encode = (typeEvent: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = typeEvent.target.value
    setDecodedUrl(value)
    setEncodedUrl(encodeURIComponent(value));
  };

  return (
    <div className={styles.page}>
      <header className={styles.code}>
        url decoder
      </header>
      <main className={styles.main}>
        <div className={styles['url-container']}>
          <textarea value={encodedUrl} onChange={decode} placeholder="encoded url">
          </textarea>
        </div>
        <div className={styles['url-container']}>
          <textarea value={decodedUrl} onChange={encode} placeholder="decoded url">
          </textarea>
        </div>
      </main>
      <footer className={styles.footer}>
        This application does not collect any personal data. Your URLs remain on your device and are not transmitted elsewhere.
      </footer>
    </div>
  );
}
