pragma solidity ^0.5.16;
contract EVoting
{
    address public owner;
    constructor()
    {
        owner = msg.sender;
    }
}