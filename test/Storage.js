describe("Storage", function () { 

    describe("Store", function () { 

        it("Should store a value", async function () {
            const storeFactory = await ethers.getContractFactory("Storage");
            const deployedStoreContract = await storeFactory.deploy();

            const valueBefore = await deployedStoreContract.retrieve()

            await deployedStoreContract.store(10)


            const valueAfter = await deployedStoreContract.retrieve()

            console.log(valueBefore.toString(),valueAfter.toString() )
    
           
          });



    })


})