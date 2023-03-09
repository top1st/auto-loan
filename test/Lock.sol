// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import "forge-std/Test.sol";
import "forge-std/console2.sol";

import "../contracts/Lock.sol";

contract LockTest is Test {

    Lock public lock;
    uint unlockTime = 86400;
    function setUp() public {
        lock = new Lock{value: 1 ether}(unlockTime);
    }

    function testLock() public {
        assertEq(lock.unlockTime(), unlockTime);
    }


}