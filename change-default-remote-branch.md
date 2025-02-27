# How to Change the Default Remote Branch

To change the default remote branch in Git, follow these steps:

1. **Fetch all branches**:
   ```sh
   git fetch origin
   ```

2. **Set the new default branch**:
   ```sh
   git push origin -u new_default_branch
   ```

3. **Update the remote repository settings**:
   Change the default branch in the repository settings on your Git hosting service (e.g., GitHub, GitLab, Bitbucket).

4. **Delete the old default branch (optional)**:
   ```sh
   git push origin --delete old_default_branch
   ```

Replace `new_default_branch` and `old_default_branch` with the names of the branches you want to set as the new default and delete, respectively.
