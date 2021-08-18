export default async function query({query, variables = {}}) {
  const result = await fetch(
    'https://api-us-east-1.graphcms.com/v2/ckmp9g1vc4egv01xmc5co9954/master',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({query, variables}),
    },
  ).then(response => response.json());

  return result.data;
}
