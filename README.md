# practice-forge

This repo is intended to serve as a playground for installing constructs from the construct forge libraries for local testing

### Prerequisite Installation Steps
1. Install yalc (used to link local npm packages)
```aidl
npm install yalc -g
```

## How To Set Up Local 
1. Navigate to the construct-forge-aws repo
2. Run `npx projen build` if you intend to do frequent edits use `npx projen watch`
3. Run `yalc publish` if you intend to do frequent edits use `yalc publish --changed`
4. Navigate back to this repo (practice-forge)
5. Run `yalc link construct-forge-aws`
6. Anytime your local construct library changes run `yalc update construct-forge-aws`