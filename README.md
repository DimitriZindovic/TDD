1. Le TDD consiste à écrire d’abord un test qui échoue, puis le minimum de code pour le faire passer, puis à refactorer en conservant les tests verts.

2. 1/ Rendre le code plus robuste
   2/ Concevoir par l'usage

3. Stub : fournit des valeurs prédéfinies sans logique ex getUser()

   Fake : implémentation simplifiée mais fonctionnelle ex un in-memory

Intégration CI/CD :

Qaund on merge une branch dans la main alors on lance les tests et si il ne passe pas alors pas possible de merge dans la main
