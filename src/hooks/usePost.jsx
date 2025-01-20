import { useEffect, useState } from "react";

export function usePost({ url, body, token }) {
  const [data, setData] = useState(); // Holder svaret fra API
  const [error, setError] = useState(); // Holder eventuelle fejl
  const [isLoading, setIsLoading] = useState(false); // Håndterer loading-status

  useEffect(() => {
    if (!url || !body) return; // Tjek, at URL og body er defineret

    setIsLoading(true); // Start loading

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        ...(token && { Authorization: `Bearer ${token}` }), // Tilføj token, hvis den findes
      },
      body: body,
    };

    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Fejl i API-kaldet"); // Hvis status ikke er OK
        }
        return res.json();
      })
      .then((data) => setData(data)) // Sæt data, hvis det lykkes
      .catch((err) => setError(err)) // Håndter fejl
      .finally(() => setIsLoading(false)); // Stop loading
  }, [url, body, token]); // Kør, når URL, body eller token ændres

  return { data, error, isLoading }; // Returner data, fejl og loading-status
}
