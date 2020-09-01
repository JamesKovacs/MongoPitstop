# MongoPitstop
Useful scripts for detecting MongoDB driver problems

## Installation
```
git clone git@github.com:JamesKovacs/MongoPitstop.git
cd MongoPitstop
pip install -r requirements.txt
```

## Running
```
./detect_version_mismatch.py <LOG_FILE>
```

## Example output

```
WARNING: Potential driver compatibility problems detected.
         See [Driver Compatibility](https://docs.mongodb.com/ecosystem/drivers/driver-compatibility-reference/) for more information.
- mongo-go-driver local build: Unknown, pre-release, or third-party driver run against MongoDB v3.6.16
- mongo-java-driver unknown: Unknown, pre-release, or third-party driver run against MongoDB v3.6.16
- nodejs 2.2.31: Driver has not been tested with MongoDB v3.6.16
- nodejs 2.2.33: Driver has not been tested with MongoDB v3.6.16
- nodejs 2.2.36: Driver has not been tested with MongoDB v3.6.16
```
