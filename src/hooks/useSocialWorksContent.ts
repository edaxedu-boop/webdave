import { useCallback, useEffect, useState } from 'react';
import type { SocialWorksContent } from '../types/socialWorks';
import { defaultSocialWorksContent } from '../data/defaultSocialWorks';
import { fetchSocialWorksContent, saveSocialWorksContent } from '../lib/socialWorksService';

export function useSocialWorksContent() {
  const [content, setContent] = useState<SocialWorksContent>(defaultSocialWorksContent);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchSocialWorksContent();
      setContent(data);
    } catch {
      setError('No se pudo cargar el contenido de obras sociales.');
      setContent(defaultSocialWorksContent);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  const save = useCallback(async (nextContent: SocialWorksContent) => {
    setSaving(true);
    setError(null);
    try {
      await saveSocialWorksContent(nextContent);
      setContent(nextContent);
    } catch {
      setError('No se pudo guardar los cambios.');
      throw new Error('save failed');
    } finally {
      setSaving(false);
    }
  }, []);

  return { content, setContent, loading, saving, error, load, save };
}
