import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase';
import type { CmsResource } from '../types/cms';

const CMS_RESOURCES = 'cms_resources';

/**
 * Fetch only published resources from Firestore for public display.
 * Both status and isPublished must be true — draft/archived records are never returned.
 */
export async function fetchPublishedResources(): Promise<CmsResource[]> {
  const q = query(
    collection(db, CMS_RESOURCES),
    where('status', '==', 'published'),
    where('isPublished', '==', true)
  );
  const snap = await getDocs(q);
  return snap.docs.map(doc => doc.data() as CmsResource);
}
