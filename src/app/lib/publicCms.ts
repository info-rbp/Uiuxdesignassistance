import { collection, getDocs, query, where, orderBy, doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import type { CmsResource, CmsNavigationItem, CmsGlobalSettings, CmsOffer } from '../types/cms';

const CMS_RESOURCES = 'cms_resources';
const CMS_NAVIGATION = 'cms_navigation';
const CMS_GLOBAL_SETTINGS = 'cms_global_settings';
const CMS_OFFERS = 'cms_offers';



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

/**
 * Fetch only published navigation items from Firestore.
 * Sorted by sortOrder ascending.
 */
export async function fetchPublishedNavigation(): Promise<CmsNavigationItem[]> {
  const q = query(
    collection(db, CMS_NAVIGATION),
    where('status', '==', 'published'),
    where('isPublished', '==', true),
    orderBy('sortOrder', 'asc')
  );
  const snap = await getDocs(q);
  return snap.docs.map(doc => doc.data() as CmsNavigationItem);
}

/**
 * Fetch global site settings.
 */
export async function fetchGlobalSettings(): Promise<CmsGlobalSettings | null> {
  const ref = doc(db, CMS_GLOBAL_SETTINGS, 'site');
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return snap.data() as CmsGlobalSettings;
}

/**
 * Fetch only published offers from Firestore.
 */
export async function fetchPublishedOffers(): Promise<CmsOffer[]> {
  const q = query(
    collection(db, CMS_OFFERS),
    where('status', '==', 'published'),
    where('isPublished', '==', true)
  );
  const snap = await getDocs(q);
  return snap.docs.map(doc => doc.data() as CmsOffer);
}



