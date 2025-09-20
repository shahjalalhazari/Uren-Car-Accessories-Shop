import { usePathname } from "next/navigation"

export const useNavigation = () => {
  const pathname = usePathname();

  const isActiveNavItem = (navItem) => {
    // IF EXACT MATCH.
    if (navItem.exact) {
        return pathname === navItem.path;
    }

    // IF MATCH PATTERNS.
    if (navItem.matchPatterns) {
      return navItem.matchPatterns.some(pattern =>
      pattern.endsWith("/") ? 
        pathname.startsWith(pattern) : 
        pathname === pattern
      );
    }

    // PARENT-CHILD RELATIONSHIPS.
    const childPaths = parentChildRelationships[navItem.path];
    if (childPaths) {
      return childPaths.some(childPath =>
        childPath.endsWith("/") ? 
          pathname.startsWith(childPath) : 
          pathname === childPath
      );
    }

    // DEFAULT TO EXACT MATCH.
    return pathname === navItem.path;
  };

  return { isActiveNavItem };
}