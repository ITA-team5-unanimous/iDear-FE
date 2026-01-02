export async function signMessage(
  privateKey: CryptoKey,
  message: string
): Promise<string> {
  const data = new TextEncoder().encode(message);

  const signature = await crypto.subtle.sign(
    {name: 'ECDSA', hash: 'SHA-256'},
    privateKey,
    data
  );

  const hex = Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');

  return '0x' + hex;
}
