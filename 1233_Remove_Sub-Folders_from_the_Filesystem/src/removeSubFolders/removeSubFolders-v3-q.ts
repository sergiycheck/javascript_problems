function removeSubfolders(folders: string[]) {
  folders.sort();

  const uniqueFoldersPaths = [];

  folders.forEach((folder) => {
    const len = uniqueFoldersPaths.length;
    const lastFolderWithSlash = uniqueFoldersPaths[len - 1] + '/';
    if (len === 0) {
      uniqueFoldersPaths.push(folder);
    } else if (!folder.startsWith(lastFolderWithSlash)) {
      uniqueFoldersPaths.push(folder);
    }
  });

  return uniqueFoldersPaths;
}

export default removeSubfolders;
