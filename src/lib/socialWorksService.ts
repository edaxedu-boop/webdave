import type { SocialWorksContent } from '../types/socialWorks';
import { defaultSocialWorksContent } from '../data/defaultSocialWorks';
import { api, clearToken, getToken, setToken } from './api';

export async function fetchSocialWorksContent(): Promise<SocialWorksContent> {
  const content = await api.getSocialWorks();
  return { ...defaultSocialWorksContent, ...content };
}

export async function saveSocialWorksContent(content: SocialWorksContent): Promise<void> {
  await api.saveSocialWorks(content);
}

export async function signInAdmin(email: string, password: string): Promise<void> {
  const { token } = await api.login(email, password);
  setToken(token);
}

export async function signOutAdmin(): Promise<void> {
  clearToken();
}

export async function getAdminSession(): Promise<boolean> {
  if (!getToken()) return false;

  try {
    await api.me();
    return true;
  } catch {
    clearToken();
    return false;
  }
}

export function isUsingLocalAuth(): boolean {
  return false;
}
