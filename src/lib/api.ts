const API_BASE = import.meta.env.VITE_API_URL || '/api';

export const TOKEN_KEY = 'mundodigital_admin_token';

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };

  if (token) {
    (headers as Record<string, string>).Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    if (response.status === 502 || response.status === 500 && !data.error) {
      throw new Error('El servidor API no está disponible. Ejecutá npm run dev:all.');
    }
    throw new Error(data.error || 'Error en la solicitud.');
  }

  return data as T;
}

export const api = {
  getSocialWorks: () => apiFetch<import('../types/socialWorks').SocialWorksContent>('/social-works'),
  saveSocialWorks: (content: import('../types/socialWorks').SocialWorksContent) =>
    apiFetch<{ ok: boolean }>('/social-works', {
      method: 'PUT',
      body: JSON.stringify(content),
    }),
  login: (email: string, password: string) =>
    apiFetch<{ token: string; email: string }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    }),
  me: () => apiFetch<{ email: string }>('/auth/me'),
};

export function isApiConfigured(): boolean {
  return true;
}
