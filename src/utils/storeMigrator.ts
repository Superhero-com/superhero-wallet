// eslint-disable-next-line import/no-extraneous-dependencies
import { Directory, Filesystem } from '@capacitor/filesystem';

/**
 * Retrieves all mnemonic files recursively from the specified directory path.
 * @param path - The directory path to search for mnemonic files.
 * @returns An array of mnemonic files found in the directory and its subdirectories.
 */
export async function getMnemonicFiles(path: string) {
  const files = [];
  const directoryContents = await Filesystem.readdir({
    path,
  });

  // eslint-disable-next-line no-restricted-syntax
  for (const file of directoryContents.files) {
    if (file.type === 'directory') {
      // eslint-disable-next-line no-await-in-loop
      await getMnemonicFiles(file.uri).then((res) => {
        files.push(...res);
      });
    } else if (file.type === 'file') {
      if (file.uri.endsWith('.mnemonic')) {
        files.push(file);
      }
    }
  }

  return files;
}

/**
 * Retrieves the restore mnemonic from Cordova.
 * @returns The restore mnemonic if found, otherwise null.
 */
export async function getRestoreMnemonicFromCordova() {
  /**
   * WebKit/WebsiteData/LocalStorage empty
   */
  const cacheFilePath = await Filesystem.getUri({
    path: 'Caches',
    directory: Directory.Library,
  });

  const files = await getMnemonicFiles(cacheFilePath.uri);

  if (files.length) {
    return files[0].name.replace('.mnemonic', '');
  }

  return null;
}

/**
 * Cleans up mnemonic files by deleting them from the cache directory.
 * @returns {Promise<void>}
 */
export async function cleanMnemonicFiles() {
  /**
   * WebKit/WebsiteData/LocalStorage empty
   */
  const cacheFilePath = await Filesystem.getUri({
    path: 'Caches',
    directory: Directory.Library,
  });

  const files = await getMnemonicFiles(cacheFilePath.uri);

  // eslint-disable-next-line no-restricted-syntax
  for (const file of files) {
    try {
      // eslint-disable-next-line no-await-in-loop
      await Filesystem.deleteFile({
        path: file.uri,
      });
    } catch (error) {
      //
    }
  }
}
