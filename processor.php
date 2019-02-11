<?php
/**
 * This script handles registration and payment
 *
 * PHP version 7.2
 *
 * @category SMS_Processor
 * @package  SMS_Processor
 * @author   Benson Imoh,ST <benson@stbensonimoh.com>
 * @license  MIT https://opensource.org/licenses/MIT
 * @link     https://stbensonimoh.com
 */
// error_reporting(E_ALL);
// ini_set('display_errors', 1);

//Require Classes
require 'config.php';
require 'SMS.php';

// Initialize SMS Object
$SMS = new SMS($smstoken);

//capture data coming from the form
$from = $_POST['name'];
$phone = $_POST['phone'];
$friendName = $_POST['friendName'];

// send SMS
$SMS->send($from, "Hi {$friendName}! I think African Women in Leadership Conference is for you. Here is a Conference where women like you and international stakeholders meet for advancing women's leadership through Reaching Resolutions and Capacity Building. You can learn more about this International Convention at awlo.org/awlc", $phone);

echo json_encode('success');
