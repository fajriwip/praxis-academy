param (
	[string]$ComputerName
)

Get-WinObject -Class win32_OperatingSystem -ComputerName $ComputerName |
Select-Object -Property CSName,@{n="Last Booted";
e={[Management.ManagementDateTimeConverter]::ToDateTime($__.LastBootUpTime)}}