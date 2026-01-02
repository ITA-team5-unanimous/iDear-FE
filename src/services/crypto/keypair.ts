const bufferToBase64 = (buffer: ArrayBuffer) => {
  const bytes = new Uint8Array(buffer);
  let binary = '';

  bytes.forEach((b) => (binary += String.fromCharCode(b)));

  return window.btoa(binary);
};

export const generateKeyPair = async () => {
  const keyPair = await window.crypto.subtle.generateKey(
    {
      name: 'ECDSA',
      namedCurve: 'P-256',
    },
    false,
    ['sign', 'verify']
  );

  const publicKeyBuffer = await window.crypto.subtle.exportKey(
    'spki',
    keyPair.publicKey
  );

  return {
    publicKey: bufferToBase64(publicKeyBuffer),
    privateKey: keyPair.privateKey,
  };
};
