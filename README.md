# ApexEncryptedFieldSearch
This contains a simple node script to search for all of the encrypted fields in a repository.

## Prerequisites 
An SFDC structured directory. Specifically containing /src/objects.

## Usage
1. Download this repo as a zip and put it into an SFDC structured directory.
2. Unzip the file.
3. Run npm install. Use A to replace all if prompted
4. Run `node eff.js`
5. A file named EncryptedFields.txt will be placed in the root of the directory and will contain a list of all the encrypted fields.
 
